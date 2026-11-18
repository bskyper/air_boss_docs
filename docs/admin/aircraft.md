---
sidebar_position: 3
---

# Manage Aircraft (Admin)

Use `/dashboard/aircraft` for fleet management.

## What you can do

- Add aircraft
- Edit dispatch and billing settings
- Update maintenance schedules
- Manage aircraft documents (POH, W&B, cheat sheet)
- Track airworthiness directives
- Remove aircraft

## Add a new aircraft

1. Open **Aircraft**.
2. Click **Add aircraft**.
3. Complete required fields:
   - Tail number
   - Make/model/year
   - Current Hobbs and Tach
   - Status
   - Hourly rate
   - Billing method/calc options
4. Save.

*Screenshot: [Add aircraft form with identity, status, billing, and meter fields]*

## Manage an existing aircraft

1. Open an aircraft profile.
2. Review dispatch data and quick stats.
3. Update:
   - Billing/rate settings
   - Combination code and parking
   - Maintenance due dates
   - Reference documents
4. Save.

## Hobbs and Tach readings

The aircraft's recorded Hobbs and Tach move up with every completed flight. The starting reading offered to the next pilot and the maintenance hours remaining are both read from them.

### When a reading corrects itself

The recorded reading moves down by itself in two cases:

- **A finished flight is corrected or deleted.** If the aircraft's meter is still sitting on that flight's ending reading, it moves back to the highest reading the aircraft's flights still support. See [Flight Log Entry](/admin/flight-log-entry).
- **Two flights in a row agree.** If two flights in a row, each begun with **Start Flight** and each run for at least 10 minutes, both start below the recorded reading, the meter moves to the latest flight's ending reading.

One low reading on one flight never lowers the meter, and a flight logged late never lowers it.

Each automatic change is written to the club's activity log as "Air Boss", and every club admin gets a notice such as "Tach corrected: N100TA". If the new reading is wrong, set it in Edit Aircraft.

Maintenance intervals are not changed. Only the hours remaining move, because they are worked out from the meter.

### When you set a reading by hand

Edit Aircraft asks you to confirm before it lowers Hobbs or Tach, or raises one by more than 5.0 hours.

- **Web:** the form shows a line with the old reading, the new reading and the size of the change. Save again to confirm.
- **Mobile:** a dialog shows the change. Tap **It's correct** to save or **Go back & fix** to change it.

### Twins

Engine 1's tach is the aircraft's tach. It is shown as "Airframe tach (Engine 1 · Left)", and further engines as "Engine 2 (Right) tach". The word in brackets is the engine's label, when it has one. Each engine's clock is checked and corrected the same way.

## Best practices

- Keep Hobbs/Tach current after maintenance events.
- Keep status accurate to prevent bad bookings.
- Upload current docs so pilots can self-serve preflight references.

:::warning
Aircraft settings directly affect pilot booking validation and cost calculations. Verify changes before dispatch periods.
:::
