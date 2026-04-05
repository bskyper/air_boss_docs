---
sidebar_position: 5
---

# Flight Lifecycle (Mobile)

This guide walks through the complete arc of a logged flight — from tapping Start before departure to reviewing the completed record in your flight history.

## What you'll need

- Aircraft selected and a reservation active (or authorization to fly without one)
- Current panel readings: Hobbs and/or Tach (depending on your aircraft's billing configuration)
- Oil level on the dipstick
- Landing count if your aircraft requires it

## Flight statuses

| Status | What it means |
|---|---|
| **In Progress** | Flight has been started; departure readings recorded |
| **Completed** | End-of-flight readings submitted; cost calculated |

A flight in **In Progress** state is visible to admins in the Tower. Once **Completed**, the record appears in your flight history and feeds into club billing.

---

## Part 1 — Start your flight

### Access the start-flight form

You can launch the start-flight flow from two places:

**From your reservation:**
1. Tap **Fleet** in the bottom nav.
2. Tap the reserved aircraft.
3. Tap **Start Flight** on the reservation card that shows **Fly Now** or **Starting Soon**.

**From the aircraft directly (no reservation):**
1. Tap **Fleet**.
2. Tap the aircraft.
3. Tap **Start Flight** on the aircraft detail screen.

*Screenshot: [Aircraft detail screen with Start Flight button highlighted]*

### Fill in pre-flight readings

The form pre-fills the aircraft's last known Hobbs and Tach values. Verify these against the actual panel before submitting.

| Field | Required | Notes |
|---|---|---|
| **Tach start** | Always | Match the tachometer on the panel |
| **Hobbs start** | Aircraft-dependent | Only shown when the aircraft tracks Hobbs time |
| **Starting oil level** | Always | Quarts on the dipstick before flight |
| **Oil added** | If applicable | Quarts added during pre-flight |

*Screenshot: [Start flight form showing Hobbs/Tach fields and oil inputs]*

### Handle a time discrepancy

If the pre-filled numbers do not match the panel:

1. Check **Starting times are incorrect** to unlock the fields.
2. Enter the correct values from the panel.

**What this does:** Air Boss stores both the original pre-filled value and the value you enter. The flight time calculation uses the value you entered. The discrepancy is flagged in the flight record for admin review.

:::warning
Do not skip the discrepancy toggle and just type over the values. The toggle ensures both the original and corrected figures are captured for audit purposes. Undocumented discrepancies can cause billing gaps.
:::

### Mark a maintenance flight (optional)

If this is a repositioning, ferry, or mechanical check flight, toggle **Maintenance flight** on before submitting.

:::tip Admin
Maintenance flights are tracked separately from personal flight time in club reports. A maintenance flight is also used to prompt crew to log a separate personal flight immediately after, if both apply.
:::

### Submit

Tap **Start Flight**.

**Expected result:**
- A flight record is created with status **In Progress**.
- The linked reservation (if any) updates to **In Progress**.
- The aircraft shows as active in the Tower tab.
- You return to the aircraft or reservation screen.

---

## Part 2 — While the flight is active

While your flight is in progress, the aircraft detail and Tower screens show the flight as active. You cannot start a second flight on the same aircraft or start another flight as the same pilot until the current one is ended.

:::tip
If you need to review your pre-flight readings mid-flight, navigate to the active flight record from the **Fleet** tab or the Tower.
:::

---

## Part 3 — End your flight

### Access the end-flight form

1. Tap **Fleet** and tap the aircraft you flew.
2. Tap **End Flight** on the active flight card.

*Screenshot: [Active flight card with End Flight button]*

### Fill in post-flight readings

| Field | Required | Notes |
|---|---|---|
| **Tach end** | Always | Must be greater than Tach start |
| **Hobbs end** | Aircraft-dependent | Only shown when Hobbs is tracked; must exceed Hobbs start |
| **Landings** | Aircraft-dependent | Required when the aircraft is configured to track landing cycles |

*Screenshot: [End flight form with Tach/Hobbs end fields and landings counter]*

### Review the live flight summary

As you type, the form updates in real time:

- **Calculated flight time** — derived from your end minus start readings
- **Estimated cost** — based on the billing method and rate captured when you started the flight

:::tip
The billing method (Hobbs or Tach) is locked to what was configured on the aircraft when you started. If the configuration changed after departure, your flight still uses the original method.
:::

### Log a squawk during closeout (optional)

If you noticed a discrepancy, write-up item, or anything the next pilot should know:

1. Tap **Log a Squawk** on the end-flight form.
2. Fill in the squawk summary and details.
3. Submit the squawk, then return to complete the flight closeout.

*Screenshot: [End flight form with Log a Squawk button and squawk entry sheet]*

The squawk is linked to your flight record. Admins and maintenance team members receive a notification. If the squawk is marked **High** priority, the aircraft is automatically grounded.

### Submit

Tap **Complete Flight**.

**Expected result:**
- The flight status updates to **Completed**.
- The linked reservation (if any) updates to **Completed**.
- Your estimated cost and calculated time appear in the flight summary.
- The flight appears in your flight history in the **Hangar** tab.

---

## Part 4 — After a maintenance flight

When you complete a maintenance flight, Air Boss prompts:

- **Log Personal Flight** — launches a new start-flight form immediately if you are also logging personal time on the same aircraft.
- **Done** — closes the flow.

---

## Part 5 — View your completed flight

1. Tap **Hangar** in the bottom nav.
2. Tap **Flight History** (or your pilot profile).

Your completed flights appear newest-first. Each record shows:

- Aircraft tail number
- Flight date
- Tach time and Hobbs time (if applicable)
- Calculated flight time
- Estimated cost
- Squawk indicator if one was logged

*Screenshot: [Flight history list with a completed flight row expanded]*

### Filter and search

- Search by tail number or date.
- Filter by date range using the date pickers.
- Sort by date, tail number, or Tach time.

---

## Common issues

### "The starting values don't match the panel"

Use the **Starting times are incorrect** toggle to enter the correct panel readings. Do not skip this — the discrepancy is recorded for billing accuracy.

### "End value must be greater than start"

Tach and Hobbs values must increase from start to end. Double-check you are reading the correct meter on the panel. If the aircraft panel shows a lower number than your start, flag it to your admin before submitting.

### "Landing count required"

This aircraft is configured to require landings. Enter the total number of landings (including touch-and-goes) since your last entry.

### "I can't start a flight — another flight is already active"

Each pilot can have only one active flight at a time. If you see this message:
- Check if you have a previous flight that wasn't ended.
- Go to **Fleet → active aircraft → End Flight** to close the open record.
- Contact your admin if you cannot locate the active flight.

### "My flight cost looks wrong"

The estimated cost uses the billing rate and method that were active when you started the flight. If the rate was recently changed, it takes effect on the next flight start. Contact your admin if you believe there is an error.

### "I finished a flight but the reservation still shows Awaiting Log"

Tap the reservation and confirm the linked flight shows **Completed**. If the flight is completed but the reservation hasn't updated, pull to refresh the reservation list. Contact support if it persists.
