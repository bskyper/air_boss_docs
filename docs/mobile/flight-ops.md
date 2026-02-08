---
sidebar_position: 4
---

# Flight Operations (Mobile)

This guide covers the in-app flow to start and complete flights.

## Before You Start

- Make sure you are in the correct active club.
- Confirm you are using the correct aircraft and reservation.
- Have panel values ready before submitting:
  - Hobbs
  - Tach
  - Oil values
  - Landing count (if required by aircraft settings)

## Start a Flight

1. Open your reservation card or aircraft detail page.
2. Tap **Start Flight**.
3. Verify aircraft and tail number in the header before entering values.
4. Enter start values:
   - Hobbs start (if tracked for the aircraft)
   - Tach start
   - Starting oil and oil added
5. Optional:
   - Mark **time discrepancy** if panel values needed manual correction
   - Mark **maintenance flight** for MX reposition/maintenance ops
6. Tap submit to start the active flight.

Expected result:

- Active flight banner appears in the app.
- Reservation and aircraft status reflect in-progress flight.

## Complete a Flight

1. Open active flight from banner or reservation.
2. Tap **End Flight**.
3. Enter end values:
   - Hobbs end (if tracked)
   - Tach end
   - Landing count (for aircraft configured to track landings)
4. Add squawk details if maintenance or safety issues were discovered.
5. Submit to close the flight log.

Expected result:

- Active flight is removed from the banner.
- Log is written to flight history.
- Related aircraft values are updated.

## Maintenance Flight Behavior

If a flight is marked as maintenance, the app can prompt you to immediately log a separate personal flight after completion.

Recommended use:

- Use maintenance flag only for repositioning, test, or maintenance-required operations.
- Do not use maintenance flag for normal pilot-time flights.

## Common Validation Rules

- End times must be greater than or equal to start times.
- Required fields vary by aircraft billing/tracking setup.
- Landing count may be required for specific aircraft settings.

## If Something Fails

### Start flight submit fails

- Confirm required fields are filled.
- Confirm you still have reservation access.
- Retry after refreshing aircraft/reservation screen.

### End flight submit fails

- Re-check meter values for numeric format.
- Confirm end values are not lower than start values.
- If landing count is required, ensure it is present and numeric.

### Wrong values were entered

- Immediately notify club admin.
- Include flight ID, tail number, and corrected values for reconciliation.
