# hired-in-the-ai-era-launch: design

## 1. The content model

There is no database. A post is a Markdown file in `apps/web/_posts`, as the baseline defines it, with front matter:

```
title         the headline
excerpt       the one-paragraph summary on the home page
coverImage    a path under apps/web/public
date          ISO 8601
author        name and picture
ogImage       the social card
```

The slug is the file name. Cover images are original artwork committed to the repository, not stock.

## 2. The routes

There is no API. The site is statically generated.

```
GET /              the hero article and the rest
GET /posts/{slug}  an article
GET /about         who this is for and how it is written (HA4)
GET /feed.xml      RSS (HA4)
GET /sitemap.xml   the sitemap (HA4)
```

## 3. The pages

The home page keeps the baseline's hero and grid, with the site's own intro. Article pages keep its layout. The header and footer carry the site's name and a link to the about page.

## 4. Events, secrets, and integrations

The baseline's brokered Cloudflare deploy credentials only. This epic adds no secret, webhook or integration.

## 5. Out of scope

Accounts, comments, newsletters, analytics, a CMS and a custom domain. The site answers on `workers.dev`; `hired-in-the-ai-era.app` is a placeholder until someone owns it. Making the `blog-starter` registry row public is orun-cloud's change, not this repository's.
