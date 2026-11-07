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
- The single translated card-reservation article and working language navigation exist in the preview.
- Full Russian translation has not run.
- GitHub access is working.
- The Mintlify dashboard requires sign-in before its built-in translation controls can be inspected. Availability and any cost have not yet been verified.
