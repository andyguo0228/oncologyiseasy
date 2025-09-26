# Oncology is Easy – Ghost Theme

A lightweight, dark Ghost theme inspired by the Oncology is Easy site (Just the Docs look).

## Features
- Dark UI, simple docs-like layout
- Tag-based sidebar on the homepage
- Post cards with tags and dates
- Clean post/page templates

## Requirements
- Ghost v5+

## Install
1. Build a zip of this folder (contents, not the enclosing `ghost-theme`):
   - In the theme root (`oncologyiseasy-ghost`), zip all files.
2. In Ghost Admin → Settings → Theme → Upload a theme → select the zip.
3. Activate the theme.

## Customize
- Colors/spacing: `assets/css/site.css`
- Header/nav: `partials/header.hbs`
- Footer: `partials/footer.hbs`
- Homepage layout: `index.hbs`

## Development
- Refer to Ghost Handlebars helpers: https://ghost.org/docs/themes/helpers/
- Restart after changes or use `ghost-local` for live development.

MIT License