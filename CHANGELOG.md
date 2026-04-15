# Changelog

Changelog for the HA History Explorer Card.
(Using format and definitions from https://keepachangelog.com/en/1.0.0/)


## [v1.0.59] - 2026-04-16
### Changed
- Add native CSS `var(--)` variable support throughout the card — enhanced `parseColor()` in `history-default-colors.js` to resolve CSS custom properties using the card element, enabling theme colors to be used in `stateColors`, `color`, `fill` and `uiColors` config fields

## [v1.0.58] - 2026-04-15
### Fixed
Fixed resolveCssVar() to also check document.body for HA theme variables

## [v1.0.57] - 2026-04-14
### New feature
- Added support for CSS named variable colors — resolves CSS var(--...) strings in all user-supplied color config fields

Allows the use of named colors in stateColors:

Example:
```yaml
stateColors:
  sensor.unavailable: "var(--state-unavailable-color)"
```

## [v1.0.56] - 2026-04-14
### Fixed
- Fixed view window not advancing on interval-based refreshes — createContent() now calls updateHistoryAutoRefresh() instead of refresh()

## [v1.0.55] - 2026-04-14
### Fixed
- Fixed defaultTimeRange restriction — allow any numeric timeRange value, not just predefined ranges
