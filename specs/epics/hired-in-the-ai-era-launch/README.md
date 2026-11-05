# Epic: hired-in-the-ai-era-launch (HA)

**People looking for work are told two opposite things about AI, that it will take their job and that it will get them one, and neither helps them decide what to do on Monday. This epic turns the `blog-starter` baseline into Hired in the AI Era, a small public blog of practical, checkable advice on getting a job now. The design idea is to keep the baseline's shape: articles are Markdown in the repository, so publishing is a merged pull request and nothing else needs running.**

It is for job seekers and career changers, and it is a showcase of a product built on Orunbase. When it ships, a visitor can read five articles, follow the site by RSS, and share a link that previews properly.

## Status

| Field | Value |
|-------|-------|
| Status | In progress |
| Cluster | **HA** (HA0–HA4) |
| Owner(s) | `apps/web` (the site and its posts) |
| Builds on | `blog-starter baseline-v3`: one Next.js Worker with Static Assets, Markdown posts in `apps/web/_posts` |
| Changes | Adds brand, articles, an about page, RSS and a sitemap; adds no provider, database or account system |
| Decisions locked | (1) Articles stay Markdown in the repository. (2) No invented statistics, quotes or success stories. (3) Cloudflare is the only provider. |
| Gate | HA1 is the baseline's own build. HA2 is the first visible change to the product. |
| Shipped as | |

## Read order

1. `design.md`: the content model, the routes, the pages, what is out of scope
2. `implementation-plan.md`: the milestones and what "done" means for each
3. `risks-and-open-questions.md`: what could go wrong and what was decided
4. `IMPLEMENTATION-STATUS.md`: what actually shipped (kept distinct from intent)

## Milestones at a glance

| Milestone | What it lands | Done when |
|---|---|---|
| HA0 — the spec | this doc set | merged to `main` |
| HA1 — live site | the baseline's build | stage and prod load, and a merge redeploys them |
| HA2 — its own brand | name, intro, theme, cover images | no starter sample post or starter copy remains |
| HA3 — the articles | five articles | all five are readable on prod |
| HA4 — ready to show | about page, RSS, sitemap, social cards | each works on prod |
