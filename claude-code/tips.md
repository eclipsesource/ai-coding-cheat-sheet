# Tip of the Day

## `/model opusplan`

With `opusplan`, Claude Code uses Opus while you're in plan mode — where the deep reasoning
actually matters — and then automatically switches to Sonnet for execution.

The result: Opus-level architecture and planning quality, but the (usually much longer)
implementation phase runs on the faster and cheaper model. No manual switching, it just
happens when you exit plan mode.

Set it permanently with `claude --model opusplan`, or `"model": "opusplan"` in your settings.
