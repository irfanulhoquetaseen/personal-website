---
title: "How I Built This Website with Hugo"
date: 2026-11-21
description: "Why I picked Hugo for my personal website, how it is structured, and how I deployed it to Vercel."
tags: ["Hugo", "Web"]
---

For my AOL course I had to build a personal website, and I chose **Hugo**, a static site generator written in Go. Here's how it went.

## Why Hugo?

- **Fast.** The whole site builds in milliseconds.
- **Simple content.** Every blog post is a plain Markdown file.
- **No database, no server.** Hugo outputs plain HTML, CSS and JS, so it can be hosted for free.

## How the site is organised

```text
content/posts/     → blog posts written in Markdown
data/profile.yaml  → my info: education, skills, projects, career plan
themes/folio/      → the custom theme (layouts, CSS, JS)
hugo.toml          → site configuration and menu
```

Keeping my personal details in one data file means I can update the home page without touching any HTML.

## Deploying

I pushed the project to GitHub and imported it into **Vercel**, which detects Hugo, runs `hugo --minify`, and publishes the `public/` folder. Every new push updates the live site automatically.

## What I learned

Hugo's templating (`range`, `with`, partials) felt strange at first, but once it clicked, building pages became quick. Next I want to add a dark mode and more project write-ups.
