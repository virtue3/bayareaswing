# bayareaswing

A static site that helps newcomers find swing dance lessons and socials in the SF Bay Area — covering balboa, lindy hop, and collegiate shag.

Built with [Astro](https://astro.build/) and [Tailwind CSS v4](https://tailwindcss.com/), deployed to GitHub Pages at **bayareaswing.com**.

## Project layout

```
src/
  content/lessons/    # one YAML file per recurring lesson
  content.config.ts   # Zod schema for lessons
  pages/              # /, /learn, /contribute
  layouts/
  components/
  styles/global.css   # Tailwind v4 + vintage design tokens
public/CNAME          # custom domain pointer for GitHub Pages
.github/workflows/    # GitHub Actions deploy workflow
```

## Adding a lesson

The friendliest path is the in-site guide at **/contribute**. The short version:

1. Create a new file in `src/content/lessons/` named like `monday-balboa-verdi-club.yaml`.
2. Fill in the schema (see the template on `/contribute` or any existing file).
3. Open a pull request. Once merged, the site rebuilds automatically.

You don't need to clone the repo — GitHub's web editor and the "Propose changes" / "Create pull request" buttons are enough.

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

Intentionally vintage — cream / burgundy / brass palette, Playfair Display for headings, Inter for body. Evokes the 1930s/40s ballroom era without leaning on kitsch. See `src/styles/global.css` for the design tokens.
