<script lang="ts">
  import reports from '#lib/data/reports-4471.json';
  import notes from '#lib/data/desk-notes.json';
  import { causeOf, uniqueById, type Report } from '#lib/kb/causes';
  import { tenantOf } from '#lib/kb/locales';
  const merged = uniqueById(reports as Report[]).filter(r => r.mergedInto === 4471);
  const anomalies = new Set(notes.oneDayMove);
  const count = (cause: string) => merged.filter(r => causeOf(r, tenantOf(r)) === cause).length;
  const oneDay = merged.filter(r => anomalies.has(r.id) && r.id !== 'R-41236');
  const chronology = merged.filter(r => r.id === 'R-41236');
</script>

<p>{reports.length} export rows; {merged.length} unique reports merged into #4471.</p>
<table>
  <thead><tr><th>Problem / investigation</th><th>Unique reports</th><th>Evidence status</th></tr></thead>
  <tbody>
    <tr><td>Shared month-first parser</td><td>{count('parser')}</td><td>Exported attribution; includes five unconfirmed reports</td></tr>
    <tr><td>booking-v3 date hint</td><td>{count('hint')}</td><td>Distinct form configuration problem</td></tr>
    <tr><td>One-day discrepancies</td><td>{oneDay.length}</td><td>Overlapping parser subset; cause unconfirmed</td></tr>
    <tr><td>Invite before booking</td><td>{chronology.length}</td><td>Overlapping parser subset; chronology unconfirmed</td></tr>
  </tbody>
</table>

<p>{count('parser')} parser + {count('hint')} hint = {merged.length} unique reports. The investigations overlap the parser group; do not add them to the total.</p>
