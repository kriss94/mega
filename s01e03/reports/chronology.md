# Investigate invite reportedly arriving before booking

Source: merged ticket #4471, KB export dated 2026-10-04.

**Reports covered: 1 unique report.**

R-41236 says the invite arrived before the booking was made. It is listed in oneDayMove but does not state a one-day difference. Chronology, delayed messages or misunderstanding remain unverified. This report remains in the 379-report parser issue; this investigation overlaps it and adds no report to the total.

## Verification / investigation

Obtain booking creation, event and message delivery timestamps, including timezones and event IDs. Expected: establish whether an invite was generated before creation. No confirmed reproduction or cause is available.

## Evidence

- Source records: https://github.com/kriss94/mega/tree/main/s01e03/export/support-kb/src/lib/data/reports-4471.json
- Attribution logic: https://github.com/kriss94/mega/tree/main/s01e03/export/support-kb/src/lib/kb/causes.ts and tenant JSON records
- Anomaly index: https://github.com/kriss94/mega/tree/main/s01e03/export/support-kb/src/lib/data/desk-notes.json
- Full ID mapping: https://github.com/kriss94/mega/blob/main/s01e03/reports/reconciliation.json
- No product runtime or live desk update source was available. Counts describe this export only.

## Report records

- **R-41236** — nine.lanterns; app; received 2026-04-20T11:52:00+02:00; intake tag parser. The invite arrived before I made the booking. I would like to know how.
