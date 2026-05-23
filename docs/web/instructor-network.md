---
sidebar_position: 3
---

# Instructor Network

Use the Instructor Network to find instructors and DPEs outside a single club roster. The directory is connection-first: contact an instructor first, then coordinate lesson requests after the relationship is accepted.

## Search and ranking

The search panel has two separate controls:

- **Keyword search** filters profiles by instructor name, rating, service, aircraft experience, DPE status, and listed airport codes.
- **Reference airport** ranks verified profiles by distance from an airport. This is the airport used for `NM from ...` and `Serves ... area` labels.

These fields are intentionally separate. Typing an airport code in **Keyword search** finds profiles matching that code; it does not silently become your distance origin. Enter the airport in **Reference airport** when you want nearby results ranked from that location.

## Reference airport behavior

A reference airport can be typed as a 3- or 4-character code, such as `KLHM`, `LHM`, `KJFK`, or `JFK`.

Air Boss normalizes airport codes before using them:

- trims whitespace
- uppercases letters
- removes separators
- accepts compact 3- or 4-character airport identifiers

Before Air Boss shows distance or saves a default, the airport must resolve to a verified airport record with coordinates. Unknown text can still be useful as keyword search, but it will not produce distance labels.

## Save as default

After a reference airport resolves successfully, select **Save as default** to store it as your default Instructor Network search airport.

Saved defaults are personal browsing preferences. They do not change an instructor's home airport, service airports, or public profile.

Use **Clear default** to remove the saved reference airport. Clearing the default does not change instructor profiles.

## Airport verification and caching

Air Boss checks its local airport directory first. If the code is not already known locally, the server can verify it through AirportDB and cache the successful result for future searches.

This means:

- known airports resolve quickly from Air Boss data
- valid new airports can be added on demand
- aliases like ICAO, FAA local, GPS, or IATA identifiers can resolve to one canonical airport
- invalid or unverified codes are not saved as defaults
- AirportDB credentials stay server-side and are never exposed in the browser

## Distance labels

When a verified reference airport is active, instructor cards may show labels such as:

- `18 NM from KLHM`
- `Serves KLHM area`

If no verified origin is active, Air Boss shows home base or service-area information instead of fake distance.
