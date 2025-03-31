---
title: "Management API Changelog"
description: "Discover what’s new in the EDIS Global Management API. Track updates to endpoints, improved stability, new parameters, and enhanced automation features."
sidebarTitle: "Management API"
---

## Changelog Management API

Updates and improvements

<Update label="March 2025">
  #### **DNS API domain update**

  We’ve introduced a new clustered endpoint for our DNS API:

  - **New DNS API hostname:** dns-api.edisglobal.com
  - This change reflects the transition from **EDIS GmbH** to **EDIS Global**, bringing consistency even to the most remote parts of our infrastructure.

  ​The legacy endpoint dns-api.edis.at will remain active for backward compatibility, but all future communication will reference dns-api.edisglobal.com.

  **Bonus:**

  The new dns-api.edisglobal.com is now **clustered** for improved redundancy and reliability.

  #### **The Beginning**

  Welcome to the Management API changelog\!

  We’re kicking things off with this first entry. Expect ongoing updates as we improve and expand how you manage your services via API.

  #### **Other improvements**

  - Improved labels and descriptions in the docs

  - Tweaked a few hydration-related parameters

  - Fixed an internal issue where logs were too shy to show up
</Update>