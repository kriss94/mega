import fs from 'node:fs';
import crypto from 'node:crypto';
const base = 's01e03/export/support-kb/src/lib/data/';
const raw = JSON.parse(fs.readFileSync(base + 'reports-4471.json'));
const unique = [...new Map(raw.map(r => [r.id, r])).values()].filter(r => r.mergedInto === 4471);
const tenants = Object.fromEntries(fs.readdirSync(base + 'tenants').map(f => {const t = JSON.parse(fs.readFileSync(base + 'tenants/' + f)); return [t.handle,t];}));
const anomalies = new Set(JSON.parse(fs.readFileSync(base + 'desk-notes.json')).oneDayMove);
const groups = {parser:[],hint:[], 'one-day':[],chronology:[],unplaced:[]};
const mechanical = {parser:0,hint:0,unplaced:0};
for (const r of unique) {
 const t = tenants[r.tenant];
 const parts = t ? new Intl.DateTimeFormat(t.locale,{year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date(Date.UTC(2026,0,2,12))).map(p=>p.type) : [];
 const cause = !t || parts.indexOf('day') >= parts.indexOf('month') ? 'unplaced' : r.channel === 'form' && t.form === 'booking-v3' ? 'hint' : 'parser';
 mechanical[cause]++;
 const group = anomalies.has(r.id) ? r.id === 'R-41236' ? 'chronology' : 'one-day' : cause;
 groups[group].push(r);
}
const dispositions = JSON.parse(fs.readFileSync('s01e03/reports/closure-dispositions.json'));
const info = {
 parser:['Shared month-first parser swaps day and month','The shared parser reads month first for day-first tenants. The export attributes these reports using tenant locale and channel, not intake tags. All 379 reports retain their exported parser attribution. Five contradictory reports are also covered by overlapping investigations; this attribution does not prove the parser explains their bodies.','Use a day-first tenant through app/email or booking-v2; enter an unambiguous intended day/month combination such as 7 April. Check whether the invite becomes 4 July. Expected: preserve the intended date.'],
 hint:['booking-v3 date hint conflicts with tenant date order','booking-v3 prints MM/DD/YYYY while the form interprets the date in the day-first tenant locale. This is distinct from the shared parser problem.','Use copper.studio booking-v3 form. Follow MM/DD/YYYY for an intended April 7 booking (04/07/YYYY). Check whether the tenant parser interprets July 4. Expected: hint and parser use the same date order. This reproduction is derived from source logic, not a live test.'],
 'one-day':['Investigate one-day calendar and invite discrepancies','Four reports explicitly describe a one-day discrepancy. Day/month swapping does not explain these examples. These reports do not establish a shared root cause. Timezone handling is a hypothesis, not a demonstrated cause; Lisbon and Toronto can correctly show different local dates for the same instant. All four remain in the 379-report parser issue. This investigation overlaps that issue; do not add its count to the total.','Compare invite and calendar dates for R-41202; compare the same meeting in Lisbon and Toronto for R-41344. Obtain original timestamps, timezone settings and calendar payloads. Expected: represent the same instant consistently and explain local date differences. No live reproduction is available.'],
 chronology:['Investigate invite reportedly arriving before booking','R-41236 says the invite arrived before the booking was made. It is listed in oneDayMove but does not state a one-day difference. Chronology, delayed messages or misunderstanding remain unverified. This report remains in the 379-report parser issue; this investigation overlaps it and adds no report to the total.','Obtain booking creation, event and message delivery timestamps, including timezones and event IDs. Expected: establish whether an invite was generated before creation. No confirmed reproduction or cause is available.']
};
const issueGroups = {...groups, parser: [...groups.parser, ...groups['one-day'], ...groups.chronology].sort((a,b)=>a.id.localeCompare(b.id))};
const summary = {snapshot:'2026-10-04 export; later desk disposition supplied: closed 05 Oct; no revised report data',sha256:crypto.createHash('sha256').update(fs.readFileSync('s01e03/kb-export-267efc5e.zip')).digest('hex'),rawRows:raw.length,uniqueReports:unique.length,duplicateRows:raw.length-unique.length,mechanical,issueGroups:Object.fromEntries(Object.entries(issueGroups).map(([k,rs])=>[k,rs.map(r=>r.id)])),groups:Object.fromEntries(Object.entries(groups).map(([k,rs])=>[k,rs.map(r=>r.id)]))};
fs.writeFileSync('s01e03/reports/reconciliation.json',JSON.stringify(summary,null,2)+'\n');
for (const [key,[title,description,repro]] of Object.entries(info)) {
 const rs=issueGroups[key];
 const content=`# ${title}\n\nSource: merged ticket #4471, KB export dated 2026-10-04.\n\n**Reports covered: ${rs.length} unique report${rs.length === 1 ? '' : 's'}.**\n\n${description}\n\n## Desk disposition / tracking closure\n\n${dispositions[key].comment}\n\n## Verification / investigation\n\n${repro}\n\n## Evidence\n\n- Source records: https://github.com/kriss94/mega/tree/main/s01e03/export/support-kb/src/lib/data/reports-4471.json\n- Attribution logic: https://github.com/kriss94/mega/tree/main/s01e03/export/support-kb/src/lib/kb/causes.ts and tenant JSON records\n- Anomaly index: https://github.com/kriss94/mega/tree/main/s01e03/export/support-kb/src/lib/data/desk-notes.json\n- Full ID mapping: https://github.com/kriss94/mega/blob/main/s01e03/reports/reconciliation.json\n- No product runtime or live desk update source was available. Counts describe this export only.\n\n## Report records\n\n`+rs.map(r=>`- **${r.id}** — ${r.tenant}; ${r.channel}; received ${r.receivedAt}; intake tag ${r.meta.intakeTag}. ${r.body}`).join('\n')+'\n';
 fs.writeFileSync(`s01e03/reports/${key}.md`,content);
}
if(issueGroups.parser.length!==379 || issueGroups.hint.length!==33 || new Set([...issueGroups.parser,...issueGroups.hint].map(r=>r.id)).size!==412) throw Error('Export issue counts failed');
if(unique.length!==412 || groups.unplaced.length || Object.values(groups).flat().length!==unique.length) throw Error('Reconciliation failed');
console.log(JSON.stringify({...summary,issueGroups:Object.fromEntries(Object.entries(issueGroups).map(([k,rs])=>[k,rs.length])),groups:Object.fromEntries(Object.entries(groups).map(([k,rs])=>[k,rs.length]))},null,2));
