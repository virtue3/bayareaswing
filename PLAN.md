# bayareaswing.com — Project Plan

A static site to help newcomers find swing-dance lessons and socials in the SF Bay Area.

## Decisions made

| Item | Choice | Notes |
|---|---|---|
| Domain | `bayareaswing.com` | Not yet purchased. Registrar: Cloudflare or Porkbun. |
| Stack | Astro (static output) + Tailwind CSS | TypeScript, no UI framework |
| Hosting | GitHub Pages | Cost-driven |
| Repo | https://github.com/virtue3/bayareaswing | Project repo (not user repo) |
| Scope | SF Bay Area only | "Worth-traveling-to" events deferred to a later feature |
| Audience | Newcomers to balboa, lindy hop, and shag | Treat all three styles with equal prominence |
| Calendar | **Deferred** | No Google Calendar integration in v1 |
| Community contributions | GitHub PRs editing YAML files | Document the GitHub web-editor flow for non-devs |
| Design direction | Custom vintage (no template) | Cream / burgundy / brass; serif display + sans body |

## Pages (v1)

- `/` — Welcome + "what is swing dancing?" intro covering balboa, lindy hop, shag
- `/learn` — Lesson listings (filterable by style and day)
- `/contribute` — How to add or edit a lesson via GitHub web editor

## Content collection: `lessons`

YAML files in `src/content/lessons/`, one per recurring lesson series. Proposed schema:

```yaml
name: "Monday Night Balboa"
style: balboa            # balboa | lindy | shag
day: monday              # day-of-week, lowercase
time: "19:30-21:00"      # 24h, range
venue: "Verdi Club"
address: "2424 Mariposa St, San Francisco, CA"
neighborhood: "Mission"
level: beginner          # beginner | intermediate | advanced | all-levels
instructor: "Jane Doe"
cost: "$15 drop-in"
contact: "https://example.com"
notes: "First lesson free for newcomers."
```

## Deployment

- GitHub Actions workflow at `.github/workflows/deploy.yml`
- Uses `actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`
- `public/CNAME` containing `bayareaswing.com`
- DNS: A records for GitHub Pages IPs + AAAA, plus CNAME for `www` (configure at registrar after first deploy)

## Design tokens (intent)

- **Palette**: cream/ivory background (`#F4EDE0`), deep burgundy accent (`#7A2E2E`), brass/gold highlight (`#B8893E`), charcoal body text (`#2A2622`)
- **Type**: Playfair Display (serif, headings) + Inter (sans, body); optional art-deco display face (e.g. Limelight) for hero only
- **Feel**: warm, classic, calm — evokes 1930s/40s without kitsch

## Work plan (tasks)

1. **Scaffold Astro + Tailwind project** (TypeScript, no UI framework, Tailwind v4)
2. **Define vintage design tokens** in Tailwind config and global CSS (palette, fonts via `@fontsource` or Google Fonts)
3. **Set up content collection for lessons** — Zod schema in `src/content/config.ts`; 2–3 example lesson YAML files
4. **Build core pages**:
   - `/` — hero, intro to swing dancing, brief sections on balboa/lindy/shag, CTA to `/learn`
   - `/learn` — cards rendered from `lessons` collection, with filter UI (style + day)
   - `/contribute` — step-by-step guide for adding a lesson via GitHub web editor (with a "click here to add a lesson" deep-link to the GitHub new-file form)
5. **Add GitHub Pages deployment workflow** (`.github/workflows/deploy.yml`) + `public/CNAME`
6. **Write README** with project overview and contribution instructions
7. **Verify build runs cleanly** (`npm run build`) and preview locally (`npm run preview`)

## Environment setup (blocker resolved in next session)

- Astro requires Node 18.17+ / 20.3+ / 22+
- nvm is installed at `~/.nvm` with 18.19.0, 18.20.8, 20.10.0, 20.19.5, 22.20.0 available
- **System default is Node 12.22 — must switch to Node 22 before scaffolding**
- The Claude Code Bash tool spawns non-interactive subshells, so `nvm use` from an interactive session does not persist. Options for the next session:
  - Prepend `PATH=$HOME/.nvm/versions/node/v22.20.0/bin:$PATH` to each Bash command
  - Or symlink Node 22 binaries into `/usr/local/bin` once
  - Or have user source nvm + nvm use 22 in the active shell, then run Claude Code commands in a way that inherits that environment

## Open questions for next session

- Confirm registrar choice (Cloudflare vs Porkbun)
- Decide whether to also buy a `.com` redirect domain like `sfswing.com` (insurance against verbal mishearing — only relevant if the user wants belt-and-suspenders)
- Confirm copy direction for the "what is swing dancing?" intro — should it be Claude-drafted or user-drafted?
