---
sidebar_position: 5
---

# Billing and Subscription (Admin)

Billing management is centered in `/dashboard/billing`.

## What you can do in Billing

- Review subscription status
- See Stripe customer/subscription IDs
- Open Stripe customer portal
- Confirm hold/active state for the active club

*Screenshot: [Billing page with subscription details and Open billing button]*

## Billing hold behavior

If a trial or subscription is not active:

- Club can be placed in **billing hold**
- Scheduling, aircraft, and maintenance tools are paused
- Users may be directed to `/billing/hold`

On `/billing/hold`:

- Admins get a direct link to `/dashboard/billing`
- Non-admin members are told to contact a club admin

## Recovery steps

1. Open `/dashboard/billing`.
2. Launch Stripe portal.
3. Resolve payment/subscription issues.
4. Return to dashboard and confirm hold warning is cleared.

## Club Management billing tab

`/dashboard/clubs/billing` currently exists but is labeled **Coming Soon**.
Use `/dashboard/billing` for actual billing actions today.
