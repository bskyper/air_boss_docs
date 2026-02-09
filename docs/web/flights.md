---
sidebar_position: 3
---

# Flights (Web Pilot)

The web pilot workspace has two flight views:

- **My Flights** — flights tied to your pilot account
- **All Flights** — all flights in the active club

## Before You Log

- Confirm active club in the header.
- Confirm tail number and billing basis (Hobbs vs Tach).
- Gather panel values before starting entry.

## My Flights

Use this page to:

- Review your latest logs
- Log new flights
- Track Hobbs/Tach discrepancies
- Mark maintenance flights
- Enter landing counts (if enabled per aircraft)

### Log Flight Workflow

1. Open **My Flights**.
2. Select aircraft/tail.
3. Enter flight date and meter values.
4. Set discrepancy/maintenance flags if needed.
5. Enter landing count if required.
6. Save and verify the row in latest flights.

Expected result:

- Row appears in history sorted by date/time.
- Calculated values and flags are visible in-table.

![My Flights entry workflow](/img/docs/web/web-flights-step-01-my-flights-entry.jpg)

## All Flights

Use this page for club-wide visibility:

- Filter by tail number, pilot, date range
- Filter for discrepancy/squawk-flagged flights
- Review tach/hobbs values and billing basis

### Review Workflow

1. Open **All Flights**.
2. Start with date range filter.
3. Narrow by tail/pilot.
4. Toggle discrepancy and squawk filters.
5. Use resulting rows for follow-up with admin/maintenance.

## Tips

- Ensure your active club is correct before interpreting totals.
- Use **All Flights** for reconciliation/trend review.
- Use **My Flights** for personal log entry and quick corrections.

## If Something Fails

### Flight row won’t save

- Check numeric format in meter fields.
- Confirm end values are not below start values.
- Ensure landing count exists when required by aircraft config.

### Missing flight in list

- Re-check active club.
- Clear or adjust filters.
- Refresh page to pull newest data.

## Screenshot Slots

- File: `/img/docs/web/web-flights-step-01-my-flights-entry.jpg`
  Place: below `### Log Flight Workflow`
- File: `/img/docs/web/web-flights-step-02-all-flights-filters.webp`
  Place: below `### Review Workflow`
