# BuildLab Project Instructions

This file is the source of truth for coding agents and contributors working in this repository. Read it before editing any file.

## Project goal

BuildLab is a responsive, multi-page community website built with plain HTML, CSS, and vanilla JavaScript. The approved visual direction comes from the BuildLab Figma blueprint: white space, navy and blue structure, bright green accents, geometric artwork, strong typography, and consistent shared navigation and footer components.

There is no framework, package installation, or build step. Pages must work when `index.html` is opened directly and when the folder is served by a local HTTP server.

## Current page ownership and status

| Page | File | Status | Editing rule |
| --- | --- | --- | --- |
| Homepage | `index.html` | Completed and approved | Protected. Do not redesign, replace, or remove its sections. |
| Join | `join.html` | Completed contributor implementation | Protected. Do not redesign or replace it. Its isolated files are `css/join-contributor.css` and `js/join-contributor.js`. |
| About | `about.html` | Placeholder / unassigned implementation | The assigned About teammate may replace only the placeholder `<section>` inside `<main>`. |
| Projects | `projects.html` | Placeholder / unassigned implementation | The assigned Projects teammate may replace only the placeholder `<section>` inside `<main>`. |
| Team | `team.html` | Placeholder / unassigned implementation | The assigned Team teammate may replace only the placeholder `<section>` inside `<main>`. |

If a request does not identify the page being assigned, ask before replacing a placeholder page.

## Protected files

Do not modify these files unless the task explicitly requests a coordinated shared-system change:

- `index.html`
- `join.html`
- `css/join-contributor.css`
- `js/join-contributor.js`
- the shared-component rules and `--bl-*` variables in `css/style.css`
- the shared navigation and footer markup used across pages
- `assets/images/BUILD LAB LOGO.png`

Never delete existing code because it appears unused on one page. It may support another page.

## Files an assigned page teammate may edit

An assigned teammate should limit changes to:

- their page HTML: `about.html`, `projects.html`, or `team.html`;
- one matching isolated stylesheet, such as `css/about.css`, `css/projects.css`, or `css/team.css`;
- one matching optional script, such as `js/about.js`, `js/projects.js`, or `js/team.js`.

Page-specific files must be loaded after the shared files:

```html
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/projects.css">

<script src="js/script.js" defer></script>
<script src="js/projects.js" defer></script>
```

Do not put new page-specific rules into `css/style.css`. Isolated files prevent one page from breaking another.

## Shared CSS system

Use the shared `bl-*` classes before creating new styles:

- `bl-container`: shared content width and responsive side spacing;
- `bl-section`: standard vertical section spacing;
- `bl-kicker`: small uppercase section label;
- `bl-button`, `bl-button--primary`, `bl-button--secondary`: shared actions;
- `bl-text-link`: shared inline action;
- `bl-header`, `bl-nav`, `bl-footer`: shared site structure.

Use the `--bl-*` variables in `:root` for colors, typography, widths, and spacing. Read `SHARED-CSS-GUIDE.md` for examples.

Page-specific classes must use the page name as a prefix:

- About: `about-*`
- Projects: `projects-*`
- Team: `team-*`

Avoid broad selectors such as `body`, `h1`, `section`, `.bl-button`, or `.bl-container` in a page stylesheet. Scope rules to the page or component, for example:

```css
.projects-page .projects-hero h1 {
  font-size: 4rem;
}
```

Do not use `!important` to override shared components.

## Required page connections

Every page must remain connected to every other page through the shared navigation and footer:

- Home → `index.html`
- About → `about.html`
- Projects → `projects.html`
- Team → `team.html`
- Join → `join.html`

On each page, only that page's navigation link receives `is-active` and `aria-current="page"`.

Keep the logo linked to `index.html`. Do not replace page links with `#` placeholders when a real page exists.

## HTML and accessibility requirements

- Keep one unique `<h1>` per page.
- Preserve the skip link and `id="main-content"`.
- Use semantic `header`, `nav`, `main`, `section`, `article`, and `footer` elements.
- Every form field requires a visible label.
- Meaningful images require useful `alt` text; decorative images use `alt=""` or `aria-hidden="true"`.
- Interactive elements must work by keyboard and show a visible focus state.
- Do not duplicate element IDs.
- Keep the viewport meta tag and responsive layouts.

## JavaScript rules

- Keep shared navigation behavior in `js/script.js`.
- Put page behavior in a separate page script.
- Guard every DOM lookup before adding listeners.
- Use page-specific variable names to avoid global redeclaration errors across classic scripts.
- Do not connect forms to an external service or transmit user data without explicit approval.
- A prototype form must clearly say when it does not submit data.

## Git workflow

1. Start from the latest approved integration branch or `main` specified by the technical lead.
2. Create one feature branch for one assigned page.
3. Do not mix unrelated page changes in the same commit.
4. Do not commit directly to `main`.
5. Open a pull request and describe exactly which files were changed.
6. Resolve conflicts by preserving completed pages and shared components.

Do not merge a page by replacing the whole `css/style.css` or `js/script.js`. Bring in the page HTML and isolate its page-specific CSS and JavaScript instead.

## Checks required before handoff

Before committing or opening a pull request:

1. Open Home, About, Projects, Team, and Join.
2. Confirm all navigation and footer links work.
3. Test desktop, tablet, and mobile widths.
4. Confirm the Homepage and Join page still look and behave as before.
5. Run `node --check` on every modified JavaScript file.
6. Run `git diff --check`.
7. Check for duplicate IDs and broken local asset paths.
8. Confirm the browser console has no errors.

If a proposed change affects a protected file or more than one page, stop and ask the technical lead before proceeding.
