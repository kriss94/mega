# booking-v3 date hint conflicts with tenant date order

Source: merged ticket #4471, KB export dated 2026-10-04.

**Reports covered: 33 unique reports.**

booking-v3 prints MM/DD/YYYY while the form interprets the date in the day-first tenant locale. This is distinct from the shared parser problem.

## Desk disposition / tracking closure

Desk engineering update: #4471 closed 5 October. Hint: won't fix — booking-v3 form retired. Closing as not planned because the affected form was retired, not because the hint was fixed. Export count remains 33.

## Verification / investigation

Use copper.studio booking-v3 form. Follow MM/DD/YYYY for an intended April 7 booking (04/07/YYYY). Check whether the tenant parser interprets July 4. Expected: hint and parser use the same date order. This reproduction is derived from source logic, not a live test.

## Evidence

- Source records: https://github.com/kriss94/mega/tree/main/s01e03/export/support-kb/src/lib/data/reports-4471.json
- Attribution logic: https://github.com/kriss94/mega/tree/main/s01e03/export/support-kb/src/lib/kb/causes.ts and tenant JSON records
- Anomaly index: https://github.com/kriss94/mega/tree/main/s01e03/export/support-kb/src/lib/data/desk-notes.json
- Full ID mapping: https://github.com/kriss94/mega/blob/main/s01e03/reports/reconciliation.json
- No product runtime or live desk update source was available. Counts describe this export only.

## Report records

- **R-41230** — copper.studio; form; received 2026-04-17T22:44:00+02:00; intake tag parser. My client came on 1 June instead of 6 January. We sorted it out.
- **R-41241** — alder.physio; form; received 2026-04-21T19:21:00+02:00; intake tag hint. We had two people show up on 8 June. They were booked for 6 August.
- **R-41251** — pale.harbour; form; received 2026-04-25T20:48:00+01:00; intake tag parser. Wednesday 7 January showed as Wednesday 1 July. I moved it myself.
- **R-41259** — copper.studio; form; received 2026-05-01T12:24:00+02:00; intake tag parser. Customer booked 11 April and got an invite for 4 November. Please look at this.
- **R-41262** — pale.harbour; form; received 2026-05-02T13:17:00+01:00; intake tag parser. We had two people show up on 3 February. They were booked for 2 March.
- **R-41275** — alder.physio; form; received 2026-05-07T18:27:00+02:00; intake tag hint. My client came on 11 July instead of 7 November. We sorted it out.
- **R-41294** — pale.harbour; form; received 2026-05-21T21:10:00+01:00; intake tag parser. Thursday 5 November showed as Monday 11 May. I moved it myself.
- **R-41305** — copper.studio; form; received 2026-05-27T13:04:00+02:00; intake tag hint. Booked for 9 August. The invite says 8 September.
- **R-41308** — alder.physio; form; received 2026-05-28T09:27:00+02:00; intake tag hint. We had two people show up on 3 May. They were booked for 5 March.
- **R-41366** — alder.physio; form; received 2026-06-21T13:17:00+02:00; intake tag hint. Sunday 11 October showed as Tuesday 10 November. I moved it myself.
- **R-41372** — alder.physio; form; received 2026-06-25T20:34:00+02:00; intake tag hint. Invite says Tuesday 8 September. We agreed Sunday 9 August. Which one do I trust?
- **R-41384** — copper.studio; form; received 2026-07-01T15:19:00+02:00; intake tag parser. The calendar invite for 8 January landed on 1 August. Nobody here touched it.
- **R-41387** — copper.studio; form; received 2026-07-02T08:17:00+02:00; intake tag hint. Invite says Sunday 4 October. We agreed Friday 10 April. Which one do I trust?
- **R-41396** — alder.physio; form; received 2026-07-07T19:19:00+02:00; intake tag hint. My client came on 10 April instead of 4 October. We sorted it out.
- **R-41400** — copper.studio; form; received 2026-07-09T15:16:00+02:00; intake tag parser. We had two people show up on 11 October. They were booked for 10 November.
- **R-41406** — pale.harbour; form; received 2026-07-11T17:06:00+01:00; intake tag parser. Every booking we make shows the wrong day. 8 July is now 7 August.
- **R-41415** — pale.harbour; form; received 2026-07-14T07:43:00+01:00; intake tag parser. The calendar invite for 9 January landed on 1 September. Nobody here touched it.
- **R-41416** — pale.harbour; form; received 2026-07-14T09:29:00+01:00; intake tag hint. The reminder for 1 November arrived for 11 January.
- **R-41418** — alder.physio; form; received 2026-07-14T17:03:00+02:00; intake tag hint. The reminder for 1 December arrived for 12 January.
- **R-41428** — copper.studio; form; received 2026-07-19T08:01:00+02:00; intake tag parser. My client came on 6 July instead of 7 June. We sorted it out.
- **R-41439** — alder.physio; form; received 2026-07-22T14:51:00+02:00; intake tag hint. Booked for 3 January. The invite says 1 March.
- **R-41441** — pale.harbour; form; received 2026-07-23T15:17:00+01:00; intake tag hint. The reminder for 6 April arrived for 4 June.
- **R-41449** — alder.physio; form; received 2026-07-29T17:47:00+02:00; intake tag parser. Thursday 8 January showed as Saturday 1 August. I moved it myself.
- **R-41453** — copper.studio; form; received 2026-07-30T15:44:00+02:00; intake tag hint. Booked for 10 February. The invite says 2 October.
- **R-41456** — alder.physio; form; received 2026-07-31T17:35:00+02:00; intake tag hint. My client came on 6 January instead of 1 June. We sorted it out.
- **R-41460** — pale.harbour; form; received 2026-08-01T13:05:00+01:00; intake tag parser. Second time this month: 5 July turned into 7 May.
- **R-41472** — alder.physio; form; received 2026-08-09T20:37:00+02:00; intake tag hint. Tuesday 9 June showed as Sunday 6 September. I moved it myself.
- **R-41485** — alder.physio; form; received 2026-08-14T21:55:00+02:00; intake tag parser. The reminder for 4 November arrived for 11 April.
- **R-41493** — pale.harbour; form; received 2026-08-19T11:18:00+01:00; intake tag hint. The reminder for 2 July arrived for 7 February.
- **R-41539** — copper.studio; form; received 2026-09-04T16:31:00+02:00; intake tag parser. The reminder for 2 March arrived for 3 February.
- **R-41572** — copper.studio; form; received 2026-09-17T17:17:00+02:00; intake tag hint. Invite says Sunday 5 July. We agreed Thursday 7 May. Which one do I trust?
- **R-41582** — pale.harbour; form; received 2026-09-22T17:15:00+01:00; intake tag parser. The reminder for 7 March arrived for 3 July.
- **R-41584** — copper.studio; form; received 2026-09-22T20:01:00+02:00; intake tag hint. Every booking we make shows the wrong day. 7 November is now 11 July.
