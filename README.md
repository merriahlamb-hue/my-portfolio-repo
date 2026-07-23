# Portfolio Site — Content Reference

This folder contains the content for Merriah Lamb's content design portfolio site. It's meant to be read by Claude Code alongside a build prompt — it is not itself a prompt, just reference material.

## About the site

A portfolio for a Senior Content Designer & UX Strategist, showcasing case studies from work at Expedia, Vrbo, Apple, Blackboard, and other companies. The tone should feel personal and human, not corporate — this is a content designer's own site, so the writing quality and voice should be front and center, not buried under generic template styling.

## Current build scope (MVP)

Building in phases — don't build the full site at once:

1. **Phase 1 (current):** Home page + one case study page (Vrbo)
2. **Phase 2 (later):** Additional case study pages as they're written (Expedia is next, not yet drafted)
3. **Phase 3 (later):** About/backstory page, possibly a writing/speaking page

Only build what's listed as current phase unless told otherwise.

## Folder structure

```
portfolio-content/
├── README.md                          ← this file
├── landing-page.md                    ← home page copy
├── projects/
│   └── vrbo-onekey-signin.md          ← Vrbo case study copy
└── images/
    └── vrbo-onekey-signin/            ← images for the Vrbo case study (empty, to be filled)
```

Each project markdown file follows the same structure: frontmatter (title, subtitle, client, role) followed by the case study narrative, with `[INSERT IMAGE: ...]` placeholders marking where visuals go and an image checklist at the bottom of the file.

## Content status

| Page | Copy status | Images status |
|---|---|---|
| Home / landing page | Done | Not yet provided |
| Vrbo case study | Done | Not yet provided |
| Expedia case study | Not yet written | Not yet provided |

## Notes for build

- All placeholder images are marked with `[INSERT IMAGE: description]` in the content files — leave visible placeholder space in the layout rather than omitting the section, since real images will be dropped in later.
- Case study pages should share a consistent template/structure so future case studies (Expedia, etc.) can be added without redesigning the layout.
- Site should be built to make it easy to add new case study pages later without restructuring the whole site.
