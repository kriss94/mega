"""Render a static review copy; does not run Svelte or the product."""
from pathlib import Path
import json, re, html
from markdown_it import MarkdownIt
root = Path(__file__).parent
base = root / 'export/support-kb/src'
source = (base / 'routes/kb/incidents/4471-split/+page.svx').read_text()
front, body = source.split('---', 2)[1:]
fields = dict(line.split(': ', 1) for line in front.strip().splitlines())
sig = fields['signature'].strip("'")
def fnv(seed):
    for ch in sig.strip():
        seed = ((seed ^ ord(ch)) * 0x01000193) & 0xffffffff
    return seed
bits = (fnv(0x811c9dc5) << 8) | (fnv(0x9e3779b9) & 255)
alphabet = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'
ref = ''.join(alphabet[(bits >> shift) & 31] for shift in range(35, -1, -5))
ref = 'DR-' + ref[:4] + '-' + ref[4:]
data = json.loads((root / 'reports/reconciliation.json').read_text())
rows = [('parser','Shared month-first parser','Exported attribution; includes five unconfirmed reports'),('hint','booking-v3 date hint','Distinct form configuration problem'),('one-day','One-day discrepancies','Overlapping parser subset; cause unconfirmed'),('chronology','Invite before booking','Overlapping parser subset; chronology unconfirmed')]
table = f'<p>{data["rawRows"]} export rows; {data["uniqueReports"]} unique reports merged into #4471.</p><table><thead><tr><th>Problem / investigation</th><th>Unique reports</th><th>Evidence status</th></tr></thead><tbody>'
for key, title, status in rows:
    table += f'<tr><td>{title}</td><td>{len(data["issueGroups"][key])}</td><td>{status}</td></tr>'
table += '</tbody></table>'
body = re.sub(r'<script>.*?</script>', '', body, flags=re.S).replace('<ReportSplit />', table).replace('<RenderStamp {signature} />', f'<p class="stamp">desk ref <b>{ref}</b></p>')
rendered = MarkdownIt('commonmark', {'html': True}).render(body)
layout = (base / 'lib/layouts/runbook.svelte').read_text()
css = layout.split('<style>')[1].split('</style>')[0]
css = re.sub(r':global\(([^)]+)\)', r'\1', css)
title = fields['title'].strip("'")
output = '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>'+html.escape(title)+' · support kb</title><style>'+css+'</style><div class="kb"><header><a class="crumb" href="https://github.com/kriss94/mega/tree/main/s01e03/export/support-kb/src/routes/kb">support desk · kb</a><h1>'+html.escape(title)+'</h1><p class="meta">owner kriss94 · investigation · reviewed 2026-10-30</p></header><main>'+rendered+'</main><footer>Static review copy from the supplied KB layout and reconciled export. Svelte runtime not executed.</footer></div></html>'
(root / 'kb-page.html').write_text(output)
assert all(f'<td>{count}</td>' in output for count in [379,33,4,1])
assert sig not in output and ref in output and '<ReportSplit' not in output
print('Static KB artifact generated; counts and derived signature stamp verified.')
