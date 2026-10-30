# Investigate one-day calendar and invite discrepancies

Source: merged ticket #4471, KB export dated 2026-10-04.

**Reports covered: 4 unique reports.**

Four reports explicitly describe a one-day discrepancy. Day/month swapping does not explain these examples. These reports do not establish a shared root cause. Timezone handling is a hypothesis, not a demonstrated cause; Lisbon and Toronto can correctly show different local dates for the same instant. The export mechanically places all four under parser.

## Verification / investigation

Compare invite and calendar dates for R-41202; compare the same meeting in Lisbon and Toronto for R-41344. Obtain original timestamps, timezone settings and calendar payloads. Expected: represent the same instant consistently and explain local date differences. No live reproduction is available.

## Evidence

- Source records: https://github.com/kriss94/mega/tree/main/s01e03/export/support-kb/src/lib/data/reports-4471.json
- Attribution logic: https://github.com/kriss94/mega/tree/main/s01e03/export/support-kb/src/lib/kb/causes.ts and tenant JSON records
- Anomaly index: https://github.com/kriss94/mega/tree/main/s01e03/export/support-kb/src/lib/data/desk-notes.json
- Full ID mapping: https://github.com/kriss94/mega/blob/main/s01e03/reports/reconciliation.json
- No product runtime or live desk update source was available. Counts describe this export only.

## Report records

- **R-41202** — kettle.books; email; received 2026-04-02T10:41:00+02:00; intake tag parser. Invite says Tuesday 12 May. Calendar says Monday 11 May. My client turned up on the Monday. We had coffee.
- **R-41209** — alder.physio; app; received 2026-04-06T15:18:00+02:00; intake tag parser. Every booking in June is one day off. Only June. Why only June.
- **R-41344** — pale.harbour; email; received 2026-06-12T09:58:00+01:00; intake tag parser. Client in Lisbon got Tuesday. Client in Toronto got Monday. Same meeting. We held it twice.
- **R-41620** — lantern.row; email; received 2026-10-04T21:49:00+02:00; intake tag parser. Tuesday 6 October showed as Monday. I moved it myself. I have stopped reporting these but my colleague says it helps you.
