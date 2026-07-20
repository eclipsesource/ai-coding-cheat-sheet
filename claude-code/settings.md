# Claude Code - Favorite Settings

Quick-copy settings for `~/.claude/settings.json` (or project-level `.claude/settings.json`).

## Stop the auto-attribution clutter

```json
"attribution": {
  "commit": "",
  "pr": ""
}
```

## Keep plans in the current workspace (not in `~/.claude`)

```json
"plansDirectory": "./.claude/plans"
```

Resolves relative to your project directory.

## Tame the spinner

```json
"spinnerVerbs": {
  "mode": "replace",
  "verbs": ["Working"]
}
```

## Disable telemetry & noise

```json
"env": {
  "DISABLE_TELEMETRY": "1",
  "DISABLE_ERROR_REPORTING": "1",
  "DISABLE_BUG_COMMAND": "1",
  "CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY": "1",
  "DISABLE_FEEDBACK_COMMAND": "1"
}
```

## Context window status line

Shows context usage percentage, token count, and percentage of 150k tokens used.

```json
"statusLine": {
  "type": "command",
  "command": "input=$(cat); used=$(echo \"$input\" | jq -r '.context_window.used_percentage // empty'); size=$(echo \"$input\" | jq -r '.context_window.context_window_size // empty'); [ -n \"$used\" ] && [ -n \"$size\" ] && { tokens=$(awk \"BEGIN{printf \\\"%.0f\\\", $used * $size / 100}\"); tk=$(awk \"BEGIN{printf \\\"%.0fk\\\", $tokens/1000}\"); pct150k=$(awk \"BEGIN{printf \\\"%.0f\\\", $tokens/150000*100}\"); printf '\\033[36mContext \\033[1;37m%.0f%%\\033[0;36m | \\033[1;37m%s\\033[0;36m tokens | \\033[1;37m%s%%\\033[0;36m of 150k\\033[0m' \"$used\" \"$tk\" \"$pct150k\"; } || { [ -n \"$used\" ] && printf '\\033[36mContext \\033[1;37m%.0f%%\\033[0m' \"$used\"; }"
}
```

## Opus for planning, Sonnet for execution

```json
"model": "opusplan"
```

Uses Opus while you're in plan mode — where the deep reasoning matters most — then
automatically switches to Sonnet for execution once you exit plan mode. No manual
switching required. Equivalent to `claude --model opusplan`.

## Auto-allow common tools & commands

Safe defaults for **non-isolated** local use. Commands that are read-only or only affect
local state. Anything touching remotes, installing packages, or running arbitrary code
stays prompted.

> **Already auto-allowed** by Claude Code (no config needed):
> `ls`, `cat`, `echo`, `pwd`, `head`, `tail`, `grep`, `find`, `wc`, `which`, `diff`,
> `stat`, `du`, `cd`, and read-only git operations (`git status`, `git log`, `git diff`).

```json
"permissions": {
  "allow": [
    "Edit",
    "Write",

    "Bash(git add:*)",
    "Bash(git commit:*)",
    "Bash(git fetch:*)",
    "Bash(git checkout:*)",
    "Bash(git branch:*)",
    "Bash(git merge:*)",
    "Bash(git rebase:*)",
    "Bash(git stash:*)",

    "Bash(npm test:*)",
    "Bash(npm run test:*)",
    "Bash(npm run build:*)",
    "Bash(npm run lint:*)",
    "Bash(yarn test:*)",
    "Bash(yarn build:*)",
    "Bash(yarn lint:*)",
    "Bash(pnpm test:*)",
    "Bash(pnpm build:*)",
    "Bash(pnpm lint:*)",

    "Bash(jest:*)",
    "Bash(vitest:*)",
    "Bash(mocha:*)",
    "Bash(pytest:*)",
    "Bash(cargo test:*)",
    "Bash(go test:*)",
    "Bash(mvn test:*)",
    "Bash(gradle test:*)",

    "Bash(eslint:*)",
    "Bash(prettier:*)",
    "Bash(tsc:*)",
    "Bash(mypy:*)",
    "Bash(pylint:*)",
    "Bash(flake8:*)",
    "Bash(rustfmt:*)",
    "Bash(gofmt:*)",
    "Bash(black:*)",

    "Bash(cargo build:*)",
    "Bash(cargo clippy:*)",
    "Bash(go build:*)",
    "Bash(go vet:*)",
    "Bash(make:*)",
    "Bash(cmake:*)",
    "Bash(dotnet build:*)"
  ],
  "deny": [
    "Bash(rm -rf:*)",
    "Bash(sudo:*)"
  ]
}
```

### What stays prompted (and why)

| Command | Risk |
|---------|------|
| `git push` | Affects shared remote |
| `npm install` / `pip install` | Runs arbitrary postinstall scripts |
| `npx` / `bunx` | Downloads and executes packages |
| `node` / `python` / `ruby` | Arbitrary code execution |
| `curl` / `wget` | Arbitrary network requests |
| `docker` / `kubectl` | Container & cluster access |
| `rm` (non-rf) | Destructive but sometimes needed — review each call |
| `aws` / `gcloud` / `az` / `terraform` | Infrastructure changes |

## All together

```json
{
  "model": "opusplan",
  "attribution": {
    "commit": "",
    "pr": ""
  },
  "plansDirectory": "./.claude/plans",
  "spinnerVerbs": {
    "mode": "replace",
    "verbs": ["Working"]
  },
  "env": {
    "DISABLE_TELEMETRY": "1",
    "DISABLE_ERROR_REPORTING": "1",
    "DISABLE_BUG_COMMAND": "1",
    "CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY": "1",
    "DISABLE_FEEDBACK_COMMAND": "1"
  },
  "permissions": {
    "allow": [
      "Edit",
      "Write",
      "Bash(git add:*)",
      "Bash(git commit:*)",
      "Bash(git fetch:*)",
      "Bash(git checkout:*)",
      "Bash(git branch:*)",
      "Bash(git merge:*)",
      "Bash(git rebase:*)",
      "Bash(git stash:*)",
      "Bash(npm test:*)",
      "Bash(npm run test:*)",
      "Bash(npm run build:*)",
      "Bash(npm run lint:*)",
      "Bash(yarn test:*)",
      "Bash(yarn build:*)",
      "Bash(yarn lint:*)",
      "Bash(pnpm test:*)",
      "Bash(pnpm build:*)",
      "Bash(pnpm lint:*)",
      "Bash(jest:*)",
      "Bash(vitest:*)",
      "Bash(mocha:*)",
      "Bash(pytest:*)",
      "Bash(cargo test:*)",
      "Bash(go test:*)",
      "Bash(mvn test:*)",
      "Bash(gradle test:*)",
      "Bash(eslint:*)",
      "Bash(prettier:*)",
      "Bash(tsc:*)",
      "Bash(mypy:*)",
      "Bash(pylint:*)",
      "Bash(flake8:*)",
      "Bash(rustfmt:*)",
      "Bash(gofmt:*)",
      "Bash(black:*)",
      "Bash(cargo build:*)",
      "Bash(cargo clippy:*)",
      "Bash(go build:*)",
      "Bash(go vet:*)",
      "Bash(make:*)",
      "Bash(cmake:*)",
      "Bash(dotnet build:*)"
    ],
    "deny": [
      "Bash(rm -rf:*)",
      "Bash(sudo:*)"
    ]
  },
  "statusLine": {
    "type": "command",
    "command": "input=$(cat); used=$(echo \"$input\" | jq -r '.context_window.used_percentage // empty'); size=$(echo \"$input\" | jq -r '.context_window.context_window_size // empty'); [ -n \"$used\" ] && [ -n \"$size\" ] && { tokens=$(awk \"BEGIN{printf \\\"%.0f\\\", $used * $size / 100}\"); tk=$(awk \"BEGIN{printf \\\"%.0fk\\\", $tokens/1000}\"); pct150k=$(awk \"BEGIN{printf \\\"%.0f\\\", $tokens/150000*100}\"); printf '\\033[36mContext \\033[1;37m%.0f%%\\033[0;36m | \\033[1;37m%s\\033[0;36m tokens | \\033[1;37m%s%%\\033[0;36m of 150k\\033[0m' \"$used\" \"$tk\" \"$pct150k\"; } || { [ -n \"$used\" ] && printf '\\033[36mContext \\033[1;37m%.0f%%\\033[0m' \"$used\"; }"
  }
}
```
