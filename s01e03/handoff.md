# S01E03 — what it shows

- UUID: c0000000-0000-4000-8000-0000005e01e3.
- Objective: split merged ticket #4471 into distinct problems with counts; publish reports and a signed KB page in kriss94/mega.
- Authorization: user explicitly requested splitting reports and pushing to https://github.com/kriss94/mega.
- Status: prepared four issue-ready report files and signed KB page. Published to origin/main in commit 126007f; Git push succeeded. GitHub issues and course completion remain unconfirmed.
- Sources inspected: root AGENTS.md; previous handoff and knowledge.md; original ZIP listing and extracted README, report data, tenant records, causes.ts, locales.ts, desk-notes.json, components and decision record. A parallel read-only agent independently reviewed all report bodies.
- Evidence: original archive kb-export-267efc5e.zip; preserved extraction export/support-kb/; reports/reconciliation.json records archive hash and ID assignments.
- Findings: 427 rows, 412 unique IDs, 15 identical duplicate rows. Mechanical cause logic gives 379 parser / 33 hint. Five contradictory reports are separated: parser 374, hint 33, one-day discrepancies 4, ambiguous chronology 1. The last two groups have no proven cause.
- Outputs: reports/{parser,hint,one-day,chronology}.md; reports/README.md; analyze.mjs; signed KB page export/support-kb/src/routes/kb/incidents/4471-split/+page.svx and ReportSplit.svelte component.
- Checks: node s01e03/analyze.mjs passes; independent Python check confirms all IDs assigned once and duplicate records identical; git diff --check passes. No runnable product or KB package manifest is supplied; rendered KB not tested.
- Environment: root branch main; origin git@github.com:kriss94/mega.git. Remote HEAD matches initial local commit. Git requires escalated execution because sandbox SSH configuration permissions fail; escalated git ls-remote works. gh CLI absent. Connected github_get_repo and github_search_issues return Unknown tool.
- Gaps: full course page inaccessible via web tool; no driven browser available; live desk update source unavailable. Counts cover only 2026-10-04 export. No GitHub issues created. Do not claim course completion.
- Next step: restore GitHub connector or authenticated issue API access to create issues from report files and record URLs. Obtain full challenge instructions and current desk evidence before course submission.

## Resume checkpoint (2026-10-30)
- Inspected root AGENTS.md, CURRENT.md, this handoff, and knowledge.md.
- MCP list-challenges confirms S01E03 remains unsolved and its full startPoint is https://hq.mega.dev/challenges/what-it-shows. It does not include the full page instructions.
- MCP resume-challenge with the selected UUID and no available receipts returned: “That challenge has nothing to pick back up.”
- No driven browser tool is available in the current tool catalog. Full challenge page, live support-desk updates, and submission procedure remain unverified.
- Course list-challenges requires a once-per-session readiness reply before steps for URL-started challenges. Awaiting that reply and access to the full challenge page.
- No GitHub changes made this session. The 374/33/4/1 split has not yet been reverified this session.

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

## Course verdict after publication
- Published commit aeb7468, issues https://github.com/kriss94/mega/issues/1 through /4.
- claim-challenge rejected: “Not accepted. Check your tickets against the task, then send the repo again.” Desk hint: “Right problems. The desk counts with its own view, as it was exported.”
- Proposed response: restore exported issue counts 379 parser / 33 hint and describe 4/1 investigations as overlapping subsets; preserve 374/33/4/1 only as auxiliary triage. See reports/count-correction.md.
- Awaiting approval for the revised GitHub scope. No corrective GitHub edits made. Course not complete.

## Counting correction approved and applied
- Student approved exported counts 379 parser / 33 hint, with 4/1 as overlapping investigations. Updated issues #1, #3, #4; #2 unchanged at 33.
- Generator now records issueGroups for coverage and retains disjoint groups as auxiliary triage. KB source/component/static page and report documentation reflect overlap.
- Checks: generator asserts 379/33 and 412-ID union; static renderer asserts counts and signature-derived stamp; git diff --check.
- Next: publish correction and resubmit; not complete without acceptance.
