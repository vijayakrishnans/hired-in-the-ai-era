# hired-in-the-ai-era-launch: implementation plan

Milestones land in order. Each is one or more tasks, each task one pull request. A milestone is marked ✅ here when its "done when" list is true, and recorded in `IMPLEMENTATION-STATUS.md`.

## HA0 — the spec ✅

This doc set, merged to `main`.

**Done when**
- the five documents are on `main`
- the epic shows its milestones in Orunbase

## HA1 — live site ✅

The baseline's own bootstrap: repository, brokered credentials, stage and prod.

**Done when**
- the Worker answers on stage and prod on `workers.dev`
- a merge to `main` redeploys both

## HA2 — its own brand ✅

The site stops looking like a starter: intro copy, palette, original cover images, and the three sample posts removed.

**Done when**
- no sample post is reachable and no starter copy remains in the site
- the home page renders the site's own identity on prod
- the repository's tests, typecheck and build are green

## HA3 — the articles

Five articles, one task each or together if reviewed together:

1. What AI actually changed about getting hired, and what it didn't
2. Skills worth building now: judgement, domain knowledge and working with AI
3. A portfolio that proves your work when everyone can generate a résumé
4. Using AI in your job search without sounding like everyone else
5. Interviewing in the AI era: take-home tasks, live coding and being honest about your tools

**Done when**
- all five are readable on prod with their own cover images
- every figure in them has a source a reader can follow, and none is invented

## HA4 — ready to show

**Done when**
- `/about`, `/feed.xml` and `/sitemap.xml` answer 200 on prod and the last two validate as XML
- an article page carries Open Graph tags with an absolute image URL on prod's origin

## Sequencing note

HA1 comes first because nothing can be seen without it. HA2 precedes HA3 so the articles land on their real design, and HA4 is last because the feed and the sitemap have nothing to list until the articles exist.
