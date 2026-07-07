---
name: plan-phases
description: Restructure the current plan into reviewable phases, each sized for a 5-15 minute human review.
user-invocable: true
disable-model-invocation: true
---

Restructure the current plan into phases that will be implemented one after another, with a manual review break between each phase.

Size each phase so a human can review it in about 5-15 minutes. If the existing steps are already small enough, a single phase is fine.

Guidelines:

* Aim for no more than about 10 changed files per phase.
* Keep the number of changed lines small enough for a quick human review.
* Each phase should form a meaningful unit of work. Do not split only because a file-count limit is reached.
* Avoid phases that are too small. For example, five phases with two changed files each should usually be combined into one. Two phases with four changed files each could also be combined.
* Feel free to reorder or rearrange steps.
