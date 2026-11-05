# hired-in-the-ai-era-launch (HA): implementation status

As-built ≠ intent. This file records what actually shipped, and every place the code departed from `design.md`.

| Milestone | State | PR |
|---|---|---|
| HA0 — the spec | ✅ | #4 |
| HA1 — live site | ✅ | #1, #2, #3 (the build) |
| HA2 — its own brand | ✅ | #5 |
| HA3 — the articles | ✅ | this PR |
| HA4 — ready to show | | |

## Departures from the design

### The first article landed with HA2

The plan had all five articles in HA3. The home page needs at least one post and the deploy smoke needs a real post, so removing the samples in HA2 meant adding the first article in the same change. HA3 adds the other four.
