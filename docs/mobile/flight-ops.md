---
sidebar_position: 4
---

# Start and End Flights (Mobile)

Use this flow when you are ready to depart and after landing.

## What you'll need

- Correct aircraft selected
- Current panel readings (Hobbs/Tach)
- Oil values
- Landing count (for aircraft that require it)

## Start a flight

1. Open the start-flight flow for your aircraft/reservation.
2. Review the prefilled starting values.
3. If needed, check **Starting times are incorrect** to manually correct start values.
4. Enter:
   - Hobbs start (shown when billing config requires it)
   - Tach start
   - Starting oil level
   - Optional oil added
5. Optional: mark **Maintenance flight**.
6. Submit.

*Screenshot: [Start flight form with discrepancy and maintenance toggles]*

:::tip
For tach-billed aircraft, Hobbs may be hidden unless the aircraft is configured to track both times.
:::

## End a flight

1. Open the active flight and tap **End Flight**.
2. Enter ending values:
   - Hobbs end (if shown)
   - Tach end
   - Landings (if required by aircraft settings)
3. Optional: log a squawk during closeout.
4. Submit.

*Screenshot: [End flight form with Hobbs/Tach, landings, and squawk button]*

## If this was a maintenance flight

After completion, Air Boss can prompt:

- **Log Personal Flight** (start a new personal log right away), or
- **Done**

## Flight summary feedback

Before submitting end values, the screen shows live estimates:

- Calculated flight time
- Estimated cost

## Common errors

### "End value must be greater than start"

Recheck Hobbs/Tach end values.

### "Landing count required"

That aircraft is configured to require landings for completion.

### "Wrong starting numbers were used"

Use the **Starting times are incorrect** option at flight start so discrepancy values are captured in the log.
