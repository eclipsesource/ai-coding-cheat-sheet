# AI Coding Cheat Sheet

Resources and tools for the [EclipseSource AI Coding Training](https://eclipsesource.teachable.com/p/ai-coding) and beyond.

**Website:** https://ai-coding-cheat-sheet.com

## Contents

- **[claude-code/settings.md](claude-code/settings.md)** — Curated Claude Code settings (permissions, attribution, status line)
- **[skills/](skills/)** — Claude Code skills for phased implementation workflows
- **[links.md](links.md)** — Training and resource links

## Using the skills

Copy a skill directory into `~/.claude/skills/` (personal) or `.claude/skills/` (project-scoped), then invoke via its slash command:

| Command | Description |
|---------|-------------|
| `/explain` | Summarize what was done and why |
| `/implement-phase [id]` | Implement a single phase, then stop for review |
| `/plan-phases` | Restructure a plan into reviewable phases |
| `/review-guide` | List files to review and in what order |
