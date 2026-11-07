# Russian documentation translation

## Scope
Translate the 183 source pages listed in `ru-sources.json` into Russian. Include all three changelogs, including the prose in API changelogs. Leave the 62 API-reference pages and both OpenAPI specifications in English.

Use the existing `preview/russian-card-reservation` branch and draft PR #242. Preserve the completed Russian card-reservation translation, removing its single-article-only notice once the full Russian documentation is ready. Do not create other languages.

## Content requirements
- Preserve the original English files and their URLs.
- Mirror each source path below `ru/`; keep the existing English filename and slug.
- Translate all prose, frontmatter titles/descriptions/sidebar titles, navigation labels, image alt text, captions, and human-readable component titles.
- Use clear, professional Russian and consistent terminology for VPS, traffic allowances, shared Traffic Pool, invoices, account credit, authorizations, captured payments, refunds, installation, and recovery.
- Keep brand names and actual portal button/menu labels in English where that is what customers see. Explain them in Russian when useful.
- Preserve command examples, executable code, configuration keys/values, API identifiers, endpoints, currencies, numbers, dates, confirmation counts, policy conditions, and product names. Do not change source policy claims during translation.
- Preserve MDX syntax, component names, imports, executable expressions, image paths, and external links. Translate prose in referenced snippets where necessary without changing the English snippet.
- Point internal documentation links to the matching Russian page when it exists. Retain English links to API references. Verify links to translated heading anchors.
- Reuse existing screenshots; translate their captions and alt text.

## Navigation and publication
- Keep English as the default language with the full existing navigation.
- Build Russian navigation matching the complete Documentation and Changelog sections.
- Keep Order API, Management API, and Looking Glass API visible as clearly labelled English links.
- Do not show links to nonexistent Russian pages or fill untranslated pages with duplicate English content.
- Before publication, validate all 183 page mappings, completeness of translation, MDX/configuration syntax, protected code blocks, numeric facts, internal links, and navigation.
- Inspect representative rendered pages (getting started, billing, VNC, technical guide, and changelogs), plus language switching and English API access.
- Publish only after the full Russian set is complete and checks pass.

## Current state
- Russian translation is being written directly through ChatGPT and GitHub; Mintlify AI has not been used.
- 150 of 183 pages are translated: Getting Started, VPS Management, all FAQ sections, partner and reseller guides, abuse guidance, recruitment pages, 17 advanced setup guides, and all three changelogs.
- 33 source pages remain: 22 advanced setup guides and 11 miscellaneous guides. See ru-progress.json for the exact completed and pending lists.
- English documentation, API references, specifications, and original URLs are preserved.
- Russian navigation lists only existing translations. The API links and the complete English documentation remain accessible.
- Internal links use Russian when the target is translated; otherwise they retain the working English target until that translation is available.
- Translated headings use Mintlify's explicit {#original-english-id} syntax. For IDs containing an ampersand, which Mintlify strips from Markdown custom IDs, an explicit ID is set directly on the heading element instead. IDs were extracted from all 183 published English pages and matched against all 1,286 source headings. Existing legacy aliases already present in the English source are preserved.
- Local checks passed for all 150 pages: MDX syntax, frontmatter, heading counts, protected executable code, Russian routes, redirect-aware internal links, self-links and linked section anchors. The preceding 133-page preview passed HTTP and exact rendered heading-ID checks for all 966 expected headings.
- Full-site translation is not complete. This draft is not ready to merge into production.

