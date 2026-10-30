<script lang="ts">
  import reports from '#lib/data/reports-4471.json';
  import notes from '#lib/data/desk-notes.json';
  import { causeOf, uniqueById, type Report } from '#lib/kb/causes';
  import { tenantOf } from '#lib/kb/locales';
  const merged = uniqueById(reports as Report[]).filter(r => r.mergedInto === 4471);
  const anomalies = new Set(notes.oneDayMove);
  const count = (cause: string) => merged.filter(r => !anomalies.has(r.id) && causeOf(r, tenantOf(r)) === cause).length;
  const oneDay = merged.filter(r => anomalies.has(r.id) && r.id !== 'R-41236');
  const chronology = merged.filter(r => r.id === 'R-41236');
</script>

<p>{reports.length} export rows; {merged.length} unique reports merged into #4471.</p>
<table>
  <thead><tr><th>Problem / investigation</th><th>Unique reports</th><th>Evidence status</th></tr></thead>
  <tbody>
    <tr><td>Shared month-first parser</td><td>{count('parser')}</td><td>Tenant-based attribution, excluding contradictions</td></tr>
    <tr><td>booking-v3 date hint</td><td>{count('hint')}</td><td>Distinct form configuration problem</td></tr>
    <tr><td>One-day discrepancies</td><td>{oneDay.length}</td><td>Cause unconfirmed</td></tr>
    <tr><td>Invite before booking</td><td>{chronology.length}</td><td>Ambiguous chronology; cause unconfirmed</td></tr>
  </tbody>
</table>
