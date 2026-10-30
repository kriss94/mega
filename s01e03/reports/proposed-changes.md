# Proposed GitHub scope — approved 2026-10-30

Target: public repository kriss94/mega. All issues and published files are visible to anyone.

The authenticated `gh issue list --state all --limit 100` check on 2026-10-30 returned no issues.

Create exactly four issues, using the first heading of each file as its title and the remaining contents as its body:

- parser.md: Shared month-first parser swaps day and month — 374 reports.
- hint.md: booking-v3 date hint conflicts with tenant date order — 33 reports.
- one-day.md: Investigate one-day calendar and invite discrepancies — 4 reports; no shared cause established.
- chronology.md: Investigate invite reportedly arriving before booking — 1 report; cause unconfirmed.

Do not add labels, assignees, milestones, or change existing issues. Recheck for duplicates immediately before creation.

After approval, record resulting issue URLs in reports/README.md and the added KB page. Publish only S01E03 changes: analysis generator and generated reports, reconciliation, this review document, verified knowledge/handoff updates, redacted challenge brief, and the KB page with its actual course signature. Include render_kb.py and kb-page.html: a static review copy using the supplied KB layout, reconciled counts, and signature-derived desk ref. Svelte runtime is not executed. Preserve the original export evidence and accepted decision record.

Submit `{repo: "kriss94/mega"}` through course claim-challenge only after publication and resolution of the desk-update evidence gap. Supply the exact retained ticket receipt. Complete debrief only after explicit acceptance.

Undo: close newly created issues with an explanation and revert the publication commit. Public copies may persist. Student approved this scope on 2026-10-30.

Review checkpoint resolved by student: obtain the support-desk update location or confirmation that no newer material is available; review the prepared static KB artifact. Counts remain scoped to 2026-10-04.
