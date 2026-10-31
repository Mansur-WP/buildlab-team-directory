# BuildLab Community Website

The BuildLab Community Website is the online home for the BuildLab software engineering community. This repository contains the initial frontend foundation; the page designs and shared components will be developed by the team in later tasks.

## Technologies

- HTML5 for page structure
- CSS3 for styling and responsive layout
- Vanilla JavaScript for browser-side behavior

This initial version uses plain HTML, CSS, and vanilla JavaScript. It does not require a framework, package installation, or build process.

## Project structure

```text
.
├── index.html
├── about.html
├── projects.html
├── team.html
├── join.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       └── BUILD LAB LOGO.png
└── README.md
```

The existing BuildLab logo is `assets/images/BUILD LAB LOGO.png`.

## Run locally

1. Open this project folder in VS Code or File Explorer.
2. Open `index.html` directly in a web browser.
3. To inspect another placeholder page, open `about.html`, `projects.html`, `team.html`, or `join.html` in the browser.

No server, package installation, or build step is needed for this initial version.

## GitHub collaboration workflow

1. Create a feature branch for your work instead of committing directly to `main` (for example, `feature/frontend-foundation`).
2. Make focused changes and commit them with clear, descriptive messages.
3. Push the branch to GitHub and open a Pull Request against the team's target branch.
4. Request code review from the Technical Lead and address any review feedback.
5. Merge only after the required review and approval; do not merge directly to `main`.

Follow any additional branch naming or review rules maintained by the team repository.

## Shared UI components

The homepage establishes the shared BuildLab design system in `css/style.css`. New pages should reuse the `bl-` prefixed classes so navigation, spacing, buttons, typography, and footer styling stay consistent.

- `bl-container` constrains page content to the shared maximum width.
- `bl-section` applies the standard responsive section spacing.
- `bl-kicker` styles uppercase section labels.
- `bl-button`, `bl-button--primary`, and `bl-button--secondary` provide shared calls to action.
- `bl-header`, `bl-nav`, and `bl-footer` are the shared site chrome components.
- Colors, typefaces, container width, and spacing are available as `--bl-*` custom properties in `:root`.

All shared components include mobile styles. Page-specific classes should also use the `bl-` prefix and should avoid changing the shared component rules directly.

See [SHARED-CSS-GUIDE.md](SHARED-CSS-GUIDE.md) for copy-ready examples, page naming conventions, collaboration rules, and the pull-request checklist.

Coding agents and contributors must also read [AGENTS.md](AGENTS.md) before editing the project. It records page ownership, protected files, integration rules, and required verification checks.

## Scope of this foundation

The homepage is a temporary in-development landing page while the team waits for UI/UX approval. The About, Projects, Team, and Join pages are simple placeholders for their assigned contributors. All five pages use the shared stylesheet and deferred JavaScript file. Final shared components and page-specific content are intentionally left for the team to implement after design approval.
