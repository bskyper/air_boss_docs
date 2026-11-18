---
sidebar_position: 5
---

# Flight Log Entry (Admin)

Use `/dashboard/logs/entry` for spreadsheet-style flight log correction.

## Best use cases

- Correct Hobbs/Tach entries
- Update oil and landing values
- Reconcile discrepancies
- Clean up data for reporting/export

## Workflow

1. Open **Flight log entry**.
2. Filter/search for the flight row.
3. Edit values inline.
4. Save row updates.
5. Validate totals and flags.

*Screenshot: [Flight log entry grid with inline editable columns]*

## Correct a finished flight

Once a flight is finished, only a club admin can change its readings, date, aircraft, pilot, billing method or maintenance-flight mark, and only a club admin can delete it. A member can still add meter photos and a fuel receipt to their own finished flight.

When a pilot reports a wrong reading:

1. Find the flight in the grid.
2. Correct the reading in the row.
3. Save.

**The aircraft's meter corrects itself.** If the flight's old ending reading is what the aircraft's Hobbs or Tach is sitting on, the aircraft's meter moves back when you save. It goes to the highest reading the aircraft's flights still support. Deleting the flight does the same. You do not need to reset Hobbs or Tach in Edit Aircraft.

If something else has moved the aircraft's meter since that flight, the meter is left alone.

Each automatic change is written to the club's activity log as "Air Boss", and every club admin gets a notice such as "Tach corrected: N100TA".

On a twin, each engine's clock is corrected the same way, and the notice names the engine.

## Safety checks

- End values cannot be below start values.
- A row that logs more than 6.0 hours on Hobbs or Tach is questioned, not blocked. A line under the row names the hours. Check the readings, then save again to confirm.
- Only change fields you can verify from source logs.
- Keep discrepancy flags accurate for audit history.

## Common issues

### "A pilot typed the wrong ending reading"

Correct the flight here. The aircraft's Hobbs or Tach moves back by itself, and the maintenance hours remaining follow it. See [Hobbs and Tach readings](/admin/aircraft#hobbs-and-tach-readings).
