# bayareaswing

A static site that helps newcomers find swing dance classes and socials in the SF Bay Area — covering Lindy Hop, Balboa, and Collegiate Shag.

Built with [Astro](https://astro.build/) and [Tailwind CSS v4](https://tailwindcss.com/), deployed to GitHub Pages at **bayareaswing.com**.

## Project layout

```
src/
  content/lessons/       # one YAML file per weekly venue / dance night
  content.config.ts      # Zod schema for venues
  pages/
    index.astro          # /
    the-dances.astro     # /the-dances
    find-classes.astro   # /find-classes
  layouts/BaseLayout.astro
  styles/global.css      # Tailwind v4 + dark jazz-poster tokens
public/CNAME             # custom domain pointer for GitHub Pages
.github/workflows/       # GitHub Actions deploy workflow
```

## Adding or editing a venue

Each weekly dance night is one YAML file in `src/content/lessons/`. Open an existing file (e.g. `tuesday-woodchoppers-ball.yaml`) for the full shape — the short version:

```yaml
name: "Venue Name"
day: tuesday              # monday … sunday (lowercase)
location: "Short location for home page card"
addressLine1: "Venue · 123 Main St"   # optional, find-classes detail
addressLine2: "Neighborhood, City"    # optional
url: "https://venue.example.com/"
styles: [lindy, balboa]   # subset of: lindy | balboa | shag
description: "One- or two-sentence venue blurb."
links:                    # optional: register, directions, etc.
  - { label: "Register for classes", url: "https://..." }
schedule:                 # optional: ordered rows
  - { time: "9:00–9:30 pm", desc: "Beginner drop-in lesson" }
scheduleNote: "See website for exact times"   # optional
cost:
  - { label: "Admission", value: "$15" }
costNote: "See website for current admission" # used when cost is empty
```

Submit changes via a pull request — once merged, the site rebuilds automatically.

## Local development

Requires Node 18.17+ / 20.3+ / 22+.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # serve the built site
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with Astro and publishes to GitHub Pages. The `public/CNAME` file points the deployment at `bayareaswing.com`; DNS records are configured at the domain registrar.

## Design

Dark jazz-poster aesthetic — ink-black background (`neutral-950`), cream text (`#f2ead8`), with a single hot red accent (`#c8422a`). System font stack, no display faces. Design tokens live in `src/styles/global.css`.
