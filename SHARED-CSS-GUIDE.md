# BuildLab Shared CSS Guide

This guide explains how every contributor can build a page using the shared BuildLab styles without breaking another team member's work.

## The main rule

Do not delete, rename, or directly change an existing shared `bl-` class. Shared classes are used by more than one part of the website, so changing one can affect several pages at once.

Instead:

1. Reuse the shared class when it already does what you need.
2. Add a new page-specific class when your page needs something different.
3. Put page-specific CSS in a separate page stylesheet such as `css/projects.css`.

## Shared design tokens

The `:root` section in `css/style.css` contains the website's design tokens:

```css
var(--bl-navy)
var(--bl-navy-dark)
var(--bl-blue)
var(--bl-green)
var(--bl-white)
var(--bl-ink)
var(--bl-line)
var(--bl-font-display)
var(--bl-font-body)
var(--bl-container)
var(--bl-space-section)
```

Use these variables instead of introducing slightly different colors, font families, widths, or section spacing.

```css
.projects-card {
  color: var(--bl-ink);
  border: 1px solid var(--bl-line);
  background: var(--bl-white);
}
```

Do not replace a token's value just to change one page. Override the property inside your page-specific class instead.

## Shared layout classes

### Container

`bl-container` keeps content aligned to the same maximum width and gives it responsive side spacing.

```html
<section class="projects-intro">
  <div class="bl-container">
    <!-- Page content -->
  </div>
</section>
```

### Section spacing

`bl-section` adds the standard responsive vertical spacing.

```html
<section class="bl-section projects-list" aria-labelledby="projects-title">
  <div class="bl-container">
    <h1 id="projects-title">Our projects</h1>
  </div>
</section>
```

### Section label

`bl-kicker` produces the small uppercase blue heading used above major headings.

```html
<p class="bl-kicker">What we build</p>
<h1>Projects shaped in public.</h1>
```

## Shared buttons and links

Always include `bl-button` as the base class, followed by a variant.

```html
<a class="bl-button bl-button--primary" href="join.html">Join the lab</a>
<a class="bl-button bl-button--secondary" href="projects.html">Explore projects</a>
<a class="bl-text-link" href="about.html">Learn more <span aria-hidden="true">↗</span></a>
```

Do not copy the button CSS into a new class. Reusing the component keeps hover behavior, spacing, and mobile sizing consistent.

## Shared header and footer

Every public page should use the same `bl-header`, `bl-nav`, and `bl-footer` markup as `index.html`.

On each page, move `is-active` and `aria-current="page"` to the current navigation link. For example, on `projects.html`:

```html
<a class="bl-nav__link" href="index.html">Home</a>
<a class="bl-nav__link" href="about.html">About</a>
<a class="bl-nav__link is-active" href="projects.html" aria-current="page">Projects</a>
```

Keep the mobile-menu button and `js/script.js` reference. The shared script safely activates the menu only when the required elements exist.

## Creating page-specific styles

Give each page a unique class on `<body>`:

```html
<body class="projects-page">
```

Use a page prefix for new components:

- About page: `about-`
- Projects page: `projects-`
- Team page: `team-`
- Join page: `join-`

Example:

```html
<section class="bl-section projects-showcase">
  <div class="bl-container projects-showcase__grid">
    <article class="projects-card">...</article>
  </div>
</section>
```

Add its CSS to an isolated page file such as `css/projects.css`, loaded after `css/style.css`:

```html
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/projects.css">
```

Then keep every selector scoped to that page:

```css
/* =========================================================
   PROJECTS PAGE
========================================================= */

.projects-showcase__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.projects-card {
  border: 1px solid var(--bl-line);
  padding: 32px;
}

@media (max-width: 760px) {
  .projects-showcase__grid {
    grid-template-columns: 1fr;
  }
}
```

Page-specific styles must not use broad selectors such as `h1`, `section`, `.bl-button`, or `.bl-container`. Scope them to the page or component:

```css
/* Avoid: changes every h1 on the website */
h1 { font-size: 40px; }

/* Good: changes only the Projects page heading */
.projects-page .projects-hero h1 { font-size: 40px; }
```

## Safe workflow for every contributor

1. Pull the latest team branch before starting.
2. Create your own feature branch, for example `feature/projects-page`.
3. Edit only your assigned HTML page and its isolated page stylesheet or script.
4. Reuse the existing shared header, footer, layout, buttons, variables, and script.
5. Check your page on desktop and mobile.
6. Open the other pages and confirm that your CSS did not change them.
7. Commit focused changes and open a pull request. Do not merge directly into `main`.

## Things contributors must not do

- Do not delete existing CSS because it appears unused on your page.
- Do not rename shared `bl-` classes.
- Do not rewrite the global reset or `:root` variables for one page.
- Do not add another CSS framework or global stylesheet without team approval.
- Do not use `!important` to force a page-specific design.
- Do not replace `js/script.js` with page-only code.
- Do not edit another contributor's page-specific section unless the pull request is coordinated with them.
- Do not commit directly to `main`.

## Before opening a pull request

Confirm all of the following:

- The correct navigation link is active.
- The shared header and footer still match the homepage.
- The page works at desktop, tablet, and mobile widths.
- Links and buttons have visible focus states and meaningful text.
- Images have useful `alt` text, or an empty `alt` when decorative.
- The browser console has no JavaScript errors.
- Home, About, Projects, Team, and Join still open correctly.

If a shared component genuinely needs to change, discuss it with the team first and put the shared-component change in a separate, clearly described commit. This makes the impact easy to review.
