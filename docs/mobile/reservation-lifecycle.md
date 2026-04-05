---
sidebar_position: 3
---

# Reservation Lifecycle (Mobile)

Reservations move through a defined set of statuses from the moment you book to when your flight is logged. This guide covers every stage and the actions available at each point.

## What you'll need

- Active club selected (see [Switching clubs](/docs/mobile/navigation))
- Approved membership — pending members cannot create reservations
- Aircraft access within your club

## Reservation statuses

Every reservation shows a color-coded status label in your list and on the calendar.

| Status | Color | When it appears |
|---|---|---|
| **Upcoming** | Orange | Confirmed; departure is more than 30 minutes away |
| **Starting Soon** | Pink | Within 30 minutes of the scheduled start time |
| **Fly Now** | Blue | Start time has passed; no flight has been started yet |
| **In Progress** | Green | A flight linked to this reservation is currently active |
| **Awaiting Log** | Amber | Reservation window has ended with no completed flight logged |
| **Completed** | Grey | A completed flight is linked to this reservation |

:::tip
**Awaiting Log** is an action signal, not an error. If you see it, tap the reservation and start your end-of-flight closeout. Admins can also see this status for any club member.
:::

## Create a reservation

### From the Fleet tab (most common)

1. Tap **Fleet** in the bottom navigation bar.
2. Tap the aircraft you want to reserve.
3. Tap **Reserve**.
4. The reservation calendar opens, filtered to that aircraft.
5. Tap an open time slot or tap **Create Reservation**.
6. Set the **start date and time**.
7. Set the **end date and time**.
8. Optionally add a **flight description**.
9. Tap **Submit**.

*Screenshot: [Create reservation bottom sheet with start/end pickers and description field]*

**Expected result:** The new reservation appears on the calendar and in your reservation list with status **Upcoming**.

### From the calendar directly (Fleet mode)

1. Tap **Fleet** and enable **Fleet mode** using the toggle.
2. Tap an open slot on any aircraft row.
3. Select the **aircraft** from the picker (since you're booking across multiple aircraft).
4. Set times, add an optional description, and tap **Submit**.

:::warning
Fleet mode and Month view cannot be active at the same time. Turn Fleet mode off if you need to navigate by month.
:::

## Reservation types

When creating or editing a reservation, you can set a reservation type to communicate the nature of your flight.

| Type | When to use |
|---|---|
| **Personal** | Standard club flight for personal use |
| **Training** | Dual instruction or solo training session |
| **Maintenance** | Aircraft maintenance or ferry flight *(admin/maintenance team only)* |
| **Other** | Anything that doesn't fit the above categories |

:::tip Member
The type you select is visible to admins in the calendar and reports. Choosing the right type helps the club track training hours and maintenance needs accurately.
:::

:::tip Admin
Only admins and maintenance-team users can create **Maintenance** reservations. If you need to block an aircraft for maintenance and aren't an admin, contact your club admin.
:::

## Time slot rules

Air Boss enforces these rules at creation and when editing:

- Start and end times must fall on **30-minute boundaries** (e.g., 9:00, 9:30, 10:00).
- End time must be after start time.
- The system applies a **30-minute buffer** on either side when checking for conflicts — a gap of less than 30 minutes between reservations counts as an overlap.

If your time slot overlaps a **maintenance reservation**, you see a warning dialog. You can tap **Schedule Anyway** to proceed, but the aircraft may be unavailable.

:::warning
Scheduling over a maintenance reservation does not guarantee aircraft availability. Coordinate with your club admin before proceeding.
:::

## Modify a reservation

You can edit your own upcoming or active reservations. Admins can edit any reservation, including maintenance blocks.

1. Find the reservation in your reservation list or on the calendar.
2. Tap the reservation to open the detail view.
3. Tap **Edit**.
4. Adjust the start time, end time, or description.
5. Tap **Save**.

*Screenshot: [Reservation detail view with Edit and Cancel buttons]*

**Expected result:** The calendar and list update immediately. If the new times create a conflict, you'll see a validation error before saving.

:::tip Admin
Admins can edit reservations belonging to any member, including rescheduling maintenance blocks. The same 30-minute increment and conflict-check rules apply.
:::

## Cancel a reservation

1. Tap the reservation in the list or calendar.
2. Tap **Cancel Reservation**.
3. Confirm the cancellation.

**Expected result:** The reservation is removed from the calendar. Any member who has it on their device watchlist receives a notification.

:::warning
Canceling a reservation that has an **In Progress** flight linked to it will not stop the active flight. End the flight first, then cancel the reservation if needed.
:::

## Add a reservation to your device calendar

1. Open the reservation detail view.
2. Tap the calendar icon or **Add to Calendar**.

This creates an event in your device's native calendar app with the aircraft, time, and description pre-filled.

## Watch another pilot's reservation

If you want to be notified if someone else's reservation changes or is canceled:

1. Tap the reservation in the calendar.
2. Tap the **bell icon** to add it to your watchlist.

Tap again to remove it. Watchlisted reservations appear in your activity feed in the **Comms** tab.

## Common issues

### "I can't create a reservation"

- Confirm your **membership is approved** — pending members cannot reserve until an admin approves them.
- Check that an **active club is selected** in the top navigation.
- Ensure your times are on 30-minute boundaries.
- Look for any existing reservations that fall within the buffer window.

### "The time slot looks open but my booking fails"

The 30-minute conflict buffer can make a slot appear available visually while still being blocked. Try moving your start or end time by 30 minutes.

### "I can't edit my reservation"

- Only your own reservations are editable by members. Admins can edit any.
- If the reservation status is **In Progress** or **Completed**, editing is locked because a flight is already linked.

### "My reservation shows Awaiting Log after I landed"

Open the reservation and use the end-flight flow to complete your flight log. See [Start and End Flights](/docs/mobile/flight-ops) for the closeout steps.

### "I can see a maintenance reservation blocking my preferred time"

Contact your club admin to confirm the maintenance window. If the dates have shifted, an admin can update or remove the maintenance reservation.
