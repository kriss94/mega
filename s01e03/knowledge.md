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

## MCP brief and renewed verification (2026-10-30)
- start-challenge with the recorded S01E03 UUID successfully returned the full brief; redacted copy: challenge-instructions.json. resume-challenge previously returned no resumable state. check-lane lists gh/upload-cli/skill-wiring/hint/browser, with no desk-data retrieval tool.
- Actual MCP ticket is now retained exactly as signature in the added KB page; do not use the former handwritten signature. RenderStamp derives its desk ref. Never paste the ticket into commentary or logs.
- Deliverables: issues with counts, added .svx, and desk-facing page in one public repo. Submit via claim-challenge with answer.repo = kriss94/mega and exact retained ticket receipt. Acceptance and then debrief are required.
- Independent read-only verification reconfirmed 427/412/15 and disjoint 374/33/4/1. Four one-day reports are a symptom-based investigation, not a confirmed common bug; Lisbon/Toronto local dates may be valid.
- Exhaustive exported source/README search found no desk update URL or live fetch. MCP brief supplies no update endpoint. Web open of the exact challenge URL returned inaccessible. Still missing: newer desk evidence or its source, and any additional page-only update instructions.
- gh is installed now. Sandboxed issue listing failed connecting to api.github.com; escalated gh issue list --repo kriss94/mega --state all --limit 100 --json number,title,url succeeded with an empty list. No issues exist in that result; no mutations made.
- Local preparation: fixed actual course signature, portable evidence links and singular grammar; clarified unconfirmed causes. Added reports/proposed-changes.md and static kb-page.html with render_kb.py using installed markdown_it and supplied layout. This is not a Svelte runtime test.
- Checks: node s01e03/analyze.mjs; python3 s01e03/render_kb.py (counts and derived stamp assertions); git diff --check.
- Next: obtain desk updates/source, review issue bodies and static KB artifact, then request concrete GitHub approval. Do not publish or submit before approval and freshness review. Course remains unsolved.

## Approved publication (2026-10-30)
- Student confirmed no newer material and approved the reviewed changes and course submission.
- Created issues #1 parser (374), #2 hint (33), #3 one-day investigation (4), #4 chronology investigation (1) in kriss94/mega; URLs in reports/issue-urls.json and KB/docs.
- Publishing approved S01E03 files and submitting via MCP next. Not complete pending explicit course acceptance.
