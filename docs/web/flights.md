---
sidebar_position: 3
---

# Log and Review Flights (Web)

The web pilot workspace has two flight pages:

- **My Flights** (`/app/flights`) — log and review your own flights
- **All Flights** (`/app/all-flights`) — review all flights across the club

## Log a flight

1. Open **My Flights**.
2. Select a **Tail number**.
3. Enter the **Flight date**.
4. Enter **Tach start** and **Tach end**.
5. If Hobbs fields are shown, enter **Hobbs start** and **Hobbs end**.
6. Enter **Oil start** and **Oil added** (defaults to 0 — update only if oil was checked or added).
7. Enter **Landings** if that field appears.
8. Click **Save**.

When all required fields are filled, the flight status changes to **Completed** automatically.

*Screenshot: [My Flights log form with tach, hobbs, oil, and landings fields]*

## When Hobbs fields appear

Hobbs start and end are shown when the aircraft uses Hobbs for billing or when the club tracks both Hobbs and Tach. If Hobbs is hidden, only Tach is required. The two meter chains are independent — a hidden Hobbs field does not block saving Tach.

## Mark a time discrepancy

Turn on **Time discrepancy** if the meter reading you recorded does not match what the instrument showed. The flight saves normally but appears flagged in My Flights and All Flights so admins can review it.

*Screenshot: [Time discrepancy toggle with description field below it]*

## Mark a maintenance flight

Turn on **Maintenance flight** if the flight was for maintenance rather than normal club operations. The flight is saved with a wrench marker visible in All Flights.

## Validation rules

- End values cannot be lower than start values.
- Landing count may be required, depending on the aircraft's settings.
- All required fields must be filled before the flight saves.

## Review your recent flights

Below the log form, My Flights shows:

- **Hours summary cards** — your totals and estimated billing for the current period
- **Flight rows** — date, tail, meter readings, billing estimate, and any flags

Flights are sorted by flight date (newest first), then tail number, then Tach start.

### Filter your flights

Use the filters below the summary cards to narrow the list:

- Tail number
- Start and end date
- **Time discrepancy only** — shows only flagged flights
- **Squawk-flagged only** — shows only flights with a linked squawk

*Screenshot: [My Flights list with summary cards, filter controls, and recent flight rows]*

## Review club-wide flights in All Flights

**All Flights** shows every flight logged across your club, not just your own.

Columns include date, pilot, tail, Tach start/end, calculated Tach hours, Hobbs columns (when applicable), flags, and billing. Hobbs columns are hidden if no aircraft in the club tracks Hobbs.

### Flag meanings

| Flag | Meaning |
|---|---|
| Gap (red, hours) | Unfilled time between two consecutive flights on that aircraft |
| MX | Flight was marked as a maintenance flight |
| Discrepancy (amber) | Meter reading flagged — hover for indicated vs. corrected values |
| Squawk (rose) | A squawk was filed against this flight |
| Landings (sky) | Landings count was recorded |

### Filter All Flights

- Tail number
- Pilot name
- Start and end date
- **Time discrepancy only**
- **Squawk-flagged only**

Click **Clear filters** to reset all filters.

*Screenshot: [All Flights table with flag chips visible and filter controls open]*

:::tip
Use My Flights to log your own flights. Use All Flights to spot meter gaps, review maintenance activity, or check whether a squawk you filed is linked to a specific flight.
:::

## Common issues

**Hobbs fields are not visible**
The aircraft bills by Tach only and does not track Hobbs. Enter Tach values — no Hobbs entry is needed.

**"End value cannot be lower than start value" error**
Correct the entry. If the meter wrapped around (common with older Hobbs meters), enable the time discrepancy toggle and note the wrap in the description. Contact your admin to adjust the flight manually.

**Landings field is missing**
The aircraft is not configured to track landings. No count is needed.

**All Flights shows no flights**
Check your active club. All Flights is scoped to the currently selected club — switching clubs shows that club's data.
