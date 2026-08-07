---
sidebar_position: 100
---

# Screenshots Checklist

Use this checklist to capture and place screenshots in a consistent format.

## Image Paths

- Mobile: `/img/docs/mobile/...`
- Web pilot: `/img/docs/web/...`
- Admin: `/img/docs/admin/...`

Repo folders:

- `static/img/docs/mobile/`
- `static/img/docs/web/`
- `static/img/docs/admin/`

## Naming Convention

`<platform>-<page>-step-<nn>-<short-action>.webp`

Examples:

- `mobile-scheduling-step-01-open-schedule.webp`
- `web-profile-documents-step-03-upload-document.webp`
- `admin-users-step-02-approve-member.webp`

## Capture Standards

- Use real production-like data where possible.
- Crop to focus on the action area.
- Keep sensitive data out of frame.
- Target file size: under 250KB each.
- Preferred format: `webp` (png acceptable if needed).

## Priority Capture List

### Onboarding

:::warning
The sign-up flow changed in the 2026-08 minimal-signup wave: mobile is now a 2-step wizard (Account Details → Join a Club), web is a 4-field form (email, full name, password, confirm password), and phone/emergency contact moved to just-in-time gates. Any existing captures of the old sign-up or join flow need retakes.
:::

- [ ] `onboarding-signup-step-01-sign-up-screen.webp` — needs retake (2026-08 signup changes: no phone/emergency fields)
- [ ] `onboarding-signup-step-02-wizard-account-details.webp` — new (2-step wizard, step 1: full name + optional photo)
- [ ] `onboarding-signup-step-03-wizard-join-a-club.webp` — new (2-step wizard, step 2: Yes/No club key prompt)
- [ ] `onboarding-signup-web-step-01-four-field-form.webp` — new (web: email, full name, password, confirm password)
- [ ] `onboarding-gate-step-01-before-you-fly-emergency-contact.webp` — new (emergency-contact gate at club join / first lesson-time request)
- [ ] `onboarding-gate-step-02-phone-first-connection-request.webp` — new (phone gate at first instructor connection request)
- [ ] `onboarding-join-club-step-01-enter-club-key.webp` — needs retake (2026-08 signup changes: join step now includes Before you fly section)
- [ ] `onboarding-join-club-step-02-enter-club-password.webp` — needs retake (2026-08 signup changes)
- [ ] `onboarding-join-club-step-03-request-to-join.webp` — needs retake (2026-08 signup changes)
- [ ] `onboarding-join-club-step-04-pending-approval-screen.webp`
- [ ] `onboarding-create-club-web-step-01-web-onboarding-entry.webp`
- [ ] `onboarding-create-club-web-step-02-create-club-form.webp`
- [ ] `onboarding-create-club-web-step-03-club-created-success.webp`

### Mobile

- [ ] `mobile-scheduling-step-01-open-schedule.webp`
- [ ] `mobile-scheduling-step-02-select-aircraft-time.webp`
- [ ] `mobile-scheduling-step-03-confirm-booking.webp`
- [ ] `mobile-flight-ops-step-01-start-flight-form.webp`
- [ ] `mobile-flight-ops-step-02-active-flight-banner.webp`
- [ ] `mobile-flight-ops-step-03-end-flight-form.webp`
- [ ] `mobile-comms-step-01-feed-overview.webp`
- [ ] `mobile-profile-security-step-01-documents-section.webp`

### Web Pilot

- [ ] `web-scheduling-step-01-week-view.webp`
- [ ] `web-scheduling-step-02-new-reservation-form.webp`
- [ ] `web-scheduling-step-03-edit-reservation.webp`
- [ ] `web-flights-step-01-my-flights-entry.jpg`
- [ ] `web-flights-step-02-all-flights-filters.webp`
- [ ] `web-profile-documents-step-01-profile-form.webp`
- [ ] `web-profile-documents-step-02-upload-document.webp`
- [ ] `web-squawks-step-01-new-squawk-form.webp`

### Admin

- [ ] `admin-reservations-step-01-timeline-view.webp`
- [ ] `admin-reservations-step-02-maintenance-hold.webp`
- [ ] `admin-users-step-01-pending-members.webp`
- [ ] `admin-users-step-02-member-approval.webp`
- [ ] `admin-messaging-step-01-broadcast-form.webp`
- [ ] `admin-maintenance-step-01-squawk-board.webp`
- [ ] `admin-billing-step-01-billing-status.webp`

## Markdown Snippet

```md
![Descriptive alt text](/img/docs/mobile/mobile-scheduling-step-01-open-schedule.webp)
```
