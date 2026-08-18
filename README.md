# Portfolio Site — Content Reference

This folder contains the content for Merriah Lamb's content design portfolio site. It's meant to be read by Claude Code alongside a build prompt — it is not itself a prompt, just reference material.

## About the site

A portfolio for a Senior Content Designer & UX Strategist, showcasing case studies from work at Expedia, Vrbo, Apple, Blackboard, and other companies. The tone should feel personal and human, not corporate — this is a content designer's own site, so the writing quality and voice should be front and center, not buried under generic template styling.

## Current build scope (MVP)

Building in phases — don't build the full site at once:

## Navigation change

Top nav "About" is now labeled **"My Backstory"** and links to a new dedicated page (`backstory.md`), not an anchor on the home page. The short bio block at the bottom of the home page (currently in `landing-page.md`) stays as-is and does **not** change — it's separate content from the new backstory page, not a duplicate to be merged or removed.

## Current build phase

1. **Phase 1 (done):** Home page + Vrbo case study page, built and styled
2. **Phase 2 (current):** Add remaining case study pages — Expedia, Blackboard Learn, and Apple Carrier Deals — following the same template as Vrbo. All images now provided.
3. **Phase 3 (current):** Update top nav so "About" → "My Backstory," linking to new `backstory.md` page. Home page bottom bio block stays unchanged.
4. **Phase 4 (later):** Password protection on case study pages (NDA content — see note below)

Only build what's listed as current phase unless told otherwise.

## Folder structure

```
portfolio-content/
├── README.md                          ← this file
├── landing-page.md                    ← home page copy
├── backstory.md                       ← "My Backstory" page copy (linked from top nav)
├── projects/
│   ├── vrbo-onekey-signin.md          ← Vrbo case study copy
│   ├── expedia-sms-security.md        ← Expedia case study copy
│   ├── blackboard-voice-system.md     ← Blackboard Learn case study copy
│   └── apple-carrier-deals.md         ← Apple Carrier Deals case study copy
└── images/
    ├── vrbo-onekey-signin/            ← images for the Vrbo case study (provided)
    ├── expedia-sms-security/          ← images for the Expedia case study
    ├── blackboard-voice-system/       ← images for the Blackboard case study
    └── apple-carrier-deals/           ← images for the Apple case study
```

Each project markdown file follows the same structure: frontmatter (title, subtitle, client, role) followed by the case study narrative, with `[INSERT IMAGE: ...]` placeholders marking where visuals go and an image checklist at the bottom of the file.

## Content status

| Page | Copy status | Images status |
|---|---|---|
| Home / landing page | Done | Provided |
| My Backstory page (new) | Done | Provided |
| Vrbo case study | Done | Provided |
| Expedia case study | Done | Provided |
| Blackboard Learn case study | Done | Provided |
| Apple Carrier Deals case study | Done | Provided |

## Notes for build

- All placeholder images are marked with `[INSERT IMAGE: description]` in the content files — leave visible placeholder space in the layout rather than omitting the section, since real images will be dropped in later.
- Case study pages should share a consistent template/structure so future case studies can be added without redesigning the layout.
- Site should be built to make it easy to add new case study pages later without restructuring the whole site.
- **NDA content:** Some case studies (Expedia, Blackboard Learn, Apple Carrier Deals, and possibly Vrbo) describe work done under NDA. These case study pages need password protection before the site goes live. This should be real protection (server-side, e.g. via hosting provider's built-in page protection), not a client-side-only password check that leaves content visible in page source.
