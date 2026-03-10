---
sidebar_position: 2
---

# Create a Club (Admin)

Create a new flight club from the web onboarding flow.

## What you'll need

- A signed-in Air Boss account
- Club name
- Home airport code
- Club access credentials (or choose generated credentials)
- Optional club logo

## Create the club (web)

1. Go to [www.air-boss.club](https://www.air-boss.club).
2. Sign in and choose **Create a new club**.
3. Enter:
   - Club name
   - Home airport code
   - Club key
   - Club password
   - Optional logo
4. Submit.

*Screenshot: [Create club form with name, airport, credentials, and logo]*

## What happens automatically

After creation, Air Boss sets up:

- Your club record
- Your admin membership in that club
- A billing subscription record and trial state
- Optional Stripe customer/subscription setup (if configured)

## Mobile create-club wizard (when enabled)

Some mobile builds include a 4-step create-club flow:

1. **Club Information**
2. **Location Details** (home airport and optional gate code)
3. **Club Access Credentials** (auto-generate or custom)
4. **Review & Create**

If this option is not shown in your mobile app, use the web flow above.

## Immediate post-setup checklist

1. Open **Club Management > General** and verify club details.
2. Open **Club Management > Documents** and define required pilot documents.
3. Open **Aircraft** and add your fleet.
4. Invite pilots from **Invitations** or share club key/password securely.

:::warning
Treat club password like a shared secret. If it leaks, rotate it in Club Management and re-communicate only to trusted members.
:::
