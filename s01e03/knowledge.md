# Knowledge: ticket #4471

Working evidence index. Populate from inspected sources; preserve the original export.

## Task brief

Source: challenge text supplied by the user.
- Ticket #4471 combines 412 date-related reports.
- Deliver one GitHub issue per distinct problem, with report counts, and a signed KB page in one public repository.
- Obtain user approval before creating or changing anything on GitHub.

## Source register

- KB ZIP, extraction path, and export version/date: not inspected.
- Ticket/report locations and revisions: unknown.
- Available update source and last checked time: unknown.

## Verified findings

No export findings verified yet.

For each problem, record: ID, description, report IDs, distinct report count, evidence path/locator, and source version. Record overlaps and unassigned reports; reconcile counts against the observed input snapshot.

## KB conventions and tools

Record the observed page format, signature requirements, and tested commands with their working directories and output paths.

## Freshness and gaps

Recheck mutable evidence before publication where possible. State the snapshot/cutoff and any unavailable updates. Do not infer a cause or resolution from the ticket's "known" status.

## Verified export analysis (2026-10-30)

- Export date 2026-10-04, preserved under export/support-kb; original archive SHA-256 in reports/reconciliation.json.
- 427 rows / 412 unique report IDs / 15 identical repeated rows. All unique reports merged into #4471.
- causes.ts with tenant locale and form gives 379 parser / 33 hint. Intake tags are not reliable cause labels.
- desk-notes.json flags five contradictions: R-41202, R-41209, R-41344, R-41620 describe one-day discrepancies; R-41236 describes invite-before-booking chronology. Causes unconfirmed.
- Provisional mutually exclusive split: 374 parser, 33 hint, 4 one-day, 1 chronology. Every ID is listed in reports/reconciliation.json; full evidence in reports/*.md.
- Run from repository root: node s01e03/analyze.mjs. Independent check verified duplicate equality and complete disjoint ID coverage.
- Signed page: export/support-kb/src/routes/kb/incidents/4471-split/+page.svx. Original accepted decision unchanged. No runtime manifest supplied.
- Git remote access works with escalation; GitHub connector tools fail Unknown tool; gh CLI absent. Live desk freshness unverified.
