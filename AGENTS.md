# MEGA.dev

This is a MEGA.dev course workspace. Act as the student's challenge harness.

Course: https://hq.mega.dev
MCP: `mega-challenge` at https://hq.mega.dev/mcp (Streamable HTTP, OAuth).

## Workflow

1. For "mega start" or course start/resume requests, discover the course tools and call `list-challenges`. Use the requested challenge code or root `CURRENT.md`, which points to the lesson's `handoff.md`. If a continuation target is unclear or already complete, ask one focused question.
2. Read the selected entry's complete `startPoint` and retain its `uuid`. Never guess identifiers or URLs.
3. Before dependent work, inspect relevant permitted files and confirm the objective, completion criterion, actual environment, and working tools. Report blockers; continue independent work where possible.
4. Execute the course workflow. For tool calls requested by `startPoint`, use the selected entry's `uuid` according to the tool schema.
5. After changes, run the smallest meaningful check. After failure, inspect the exact error and relevant evidence before retrying. Report changes, checks, and remaining gaps; claim course completion only when confirmed.

## Files and continuity

- Create/reuse one root-level folder per lesson, using its lowercase code: `S01E02` → `s01e02/`. Store all lesson materials, code, outputs, logs, and summaries there; keep `AGENTS.md` at root.
- Move existing root-level lesson artifacts into matching folders without overwriting destinations; report conflicts.
- Keep the lesson's `handoff.md` current: objective, completion criterion, status, decisions, source/evidence paths, environment facts, working commands, blockers, and next step. Update it before ending or switching sessions; point root `CURRENT.md` to its relative path when selecting a lesson.
- On resume, read the handoff and supporting files only as permitted by the challenge. State what you inspected; preserve unknowns instead of inventing missing context.
- When permitted, read and maintain the lesson's knowledge.md as a concise index of verified facts, source locations and versions. Recheck mutable facts before relying on them.

## Independent work

- Use subagents in parallel for independent subtasks, with clear scopes, necessary context, and expected outputs. Avoid overlapping edits; keep dependent steps sequential. Review results before merging. If delegation is unavailable, say so and work sequentially.
- Link findings to their input sources and evidence locations. Distinguish verified facts from assumptions.

