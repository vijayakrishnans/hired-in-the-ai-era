# hired-in-the-ai-era-launch: risks and open questions

Each entry is a letter, a title, and a state: **RISK** (open, with a mitigation), **RESOLVED** (decided; say what and why), **ACCEPTED** (a cost we carry knowingly), **SETTLED** (decided for now; revisit on a stated cadence).

## HA-A — First live build of this baseline (RISK, mitigated)

`blog-starter` has only been proven offline (its own risk BS-F). A live build can fail where offline tiers cannot. Failures are recorded in the factory notes, fixed in the product where they belong there, and raised with the owner where the fix belongs in `sourceplane/blog-starter`.

## HA-B — Careers advice can mislead (RISK, mitigated)

A reader may act on this advice, and hiring claims go stale. Articles give reasoning and practice rather than promises, invent no statistics, quotes or success stories, and link a source for every figure.

## HA-C — Public repository (RESOLVED)

The baseline defaults to private. This is a showcase, so the repository is created public. Nothing secret lives in it: credentials are brokered.

## HA-D — No custom domain (ACCEPTED)

The site answers on `workers.dev`. That is enough for a showcase, and a domain can be added later without rebuilding.
