---
name: implement-phase
description: Implement only the specified phase from a phased plan, then stop for manual review.
argument-hint: "[phase-id]"
user-invocable: true
disable-model-invocation: true
---

Implement phase $ARGUMENTS only. Only implement this phase, we want to do a manual review after that. All earlier phases are implemented already.
There is no need to run linting tasks already. All verification steps should be reduced to the minimum for now, like e.g. only run new tests.
All verification steps will be performed after the last phase.
If you get feedback from a code review tool about something missing that will be implemented in a later phase (e.g. unit tests), acknowledge it and skip it for now.
