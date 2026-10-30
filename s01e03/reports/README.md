# Ticket #4471 report split

Snapshot: KB export dated 2026-10-04. Analysis reviewed 2026-10-30; live desk updates unavailable.

| Report | Unique reports | Status |
|---|---:|---|
| [Shared parser](parser.md) | 374 | Tenant-based attribution, five exceptions excluded |
| [Form hint](hint.md) | 33 | Distinct booking-v3 configuration problem |
| [One-day discrepancies](one-day.md) | 4 | Investigation; root cause unconfirmed |
| [Invite before booking](chronology.md) | 1 | Investigation; root cause unconfirmed |
| Total | 412 | Every unique ID assigned once |

427 rows contain 15 repeated IDs. The original mechanical classification is 379 parser / 33 hint;
this split moves five contradictory reports into investigations without losing or double-counting them.
See [reconciliation.json](reconciliation.json) for every ID and the source archive SHA-256.

Run `node s01e03/analyze.mjs` from the repository root. This regenerates the four issue-ready reports
and reconciliation from the preserved export. This verifies data attribution, not product behavior.

GitHub issue creation is blocked: the connected GitHub tools return “Unknown tool” and the GitHub CLI
is absent. These files are ready to use as issue bodies; no GitHub issue URLs have been obtained.

The signed KB page is in `../export/support-kb/src/routes/kb/incidents/4471-split/+page.svx`.
