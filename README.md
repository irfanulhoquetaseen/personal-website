# My Personal Website (Hugo)

Personal website of **MD Irfanul Hoque Taseen**, built with [Hugo](https://gohugo.io) and a custom theme (`themes/folio`), deployed on Vercel.

## Edit your info
- **Home page content** → `data/profile.yaml` (name, education, skills, projects, career plan, links)
- **Photo** → put the image in `static/images/` and set `photo:` in `data/profile.yaml`
- **Blog posts** → add a `.md` file in `content/posts/` (copy an existing one)
- **Site title & menu** → `hugo.toml`

## Preview locally (Windows)
    winget install Hugo.Hugo.Extended
    hugo server
Open http://localhost:1313

## Deploy
Vercel builds the site automatically on every push (`vercel.json` sets the build command and HUGO_VERSION).
