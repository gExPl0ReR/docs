# Russian documentation translation

## Scope
Translate the 183 source pages listed in `ru-sources.json` into Russian. Include all three changelogs, including the prose in API changelogs. Leave the 62 API-reference pages and both OpenAPI specifications in English.

Use the existing `preview/russian-card-reservation` branch and draft PR #242. Preserve the completed Russian card-reservation translation; its temporary translation-in-progress notice has been removed. Do not create other languages.

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
- All 183 source pages are translated directly through ChatGPT and GitHub; Mintlify AI has not been used. This includes all documentation and all three changelogs.
- No pages remain untranslated within the agreed scope. See ru-progress.json for the complete source-to-Russian mapping and validation results.
- The 62 English API-reference pages, both OpenAPI specifications, English documentation and original URLs are preserved. English remains the default language.
- Russian navigation mirrors the complete documentation and changelog sections. Clearly labelled English links expose all three API references.
- Internal documentation links point to their Russian equivalents, including source redirect aliases. API and external links retain their English targets.
- Translated headings use Mintlify's explicit {#original-english-id} syntax. For IDs containing an ampersand, which Mintlify strips from Markdown custom IDs, an explicit ID is set directly on the heading element instead. IDs were extracted from all 183 published English pages and matched against all 1,286 source headings. Existing legacy aliases already present in the English source are preserved.
- Local checks passed for all 183 pages: MDX syntax, frontmatter, heading counts, protected executable code, Russian routes, redirect-aware internal links, self-links and linked section anchors. Image paths and source links are preserved. Numeric differences were reviewed for translated formatting, spelled-out numbers and repeated context; no policy amounts or deadlines were changed.
- English sentences remaining in the Russian prose are actual interface labels, error messages, product names or technical identifiers. Existing English screenshots and command output are reused.
- The complete preview is undergoing final rendered-page and navigation verification. Production is unchanged; this PR is for review before merging.

## Existing source issues for a separate editorial review
These are present in the original English documentation and are faithfully retained in this translation, rather than silently changing the English source or policy:
- misc/extending-180-day-trial-version-of-windows.mdx gives conflicting general rearm counts in its introductory and licensing sections (five versus two). The relevant Microsoft licence should determine the final wording.
- faq/upgrades-downgrades/backup-restore-data-linux.mdx explains a 64K block size while the command uses bs=4M.
- advanced-setup-guides/install-openclaw-edislobal-vps.mdx recommends KVM Basic Plus in the plan section and KVM Basic in its summary.
