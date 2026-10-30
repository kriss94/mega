# Ticket #4471 report split

Snapshot: KB export dated 2026-10-04. Analysis reviewed 2026-10-30; subsequent engineering update supplied by the student: #4471 closed 5 October.

| Report | Unique reports | Status |
|---|---:|---|
| [Shared parser](parser.md) | 379 | Exported attribution, includes five unconfirmed reports |
| [Form hint](hint.md) | 33 | Distinct booking-v3 configuration problem |
| [One-day discrepancies](one-day.md) | 4 | Overlapping parser subset; root cause unconfirmed |
| [Invite before booking](chronology.md) | 1 | Overlapping parser subset; root cause unconfirmed |
| Parser + hint total | 412 | Investigations add no unique reports |

427 rows contain 15 repeated IDs. The original mechanical classification is 379 parser / 33 hint;
the five contradictory reports remain in parser and also appear in overlapping investigations.
The disjoint 374/33/4/1 groups in reconciliation.json are an auxiliary triage view; issueGroups records actual issue coverage.
See [reconciliation.json](reconciliation.json) for every ID and the source archive SHA-256.

Run `node s01e03/analyze.mjs` from the repository root. This regenerates the four issue-ready reports
and reconciliation from the preserved export. This verifies data attribution, not product behavior.

The student approved creation and the subsequent exported-count correction. Issues are linked below.

The signed KB page is in `../export/support-kb/src/routes/kb/incidents/4471-split/+page.svx`.

Static desk-facing review copy: [kb-page.html](../kb-page.html), regenerated with `python3 s01e03/render_kb.py`. This uses the supplied layout and reconciled data without executing Svelte.

## GitHub issues

- [parser](https://github.com/kriss94/mega/issues/1)
- [hint](https://github.com/kriss94/mega/issues/2)
- [one-day](https://github.com/kriss94/mega/issues/3)
- [chronology](https://github.com/kriss94/mega/issues/4)

## Desk dispositions and approved tracking closures

- #1 completed: parser fixed, `fix(dates): parse dd/mm for eu locales`.
- #2 not planned: hint won't fix because booking-v3 was retired.
- #3/#4 not planned: consolidated investigation trackers; their five reports retain unconfirmed causes and are not claimed fixed.

Source: [desk update](../desk-update-2026-10-05.md). Disposition comments: [closure-dispositions.json](closure-dispositions.json). No independent product runtime verification was supplied.
