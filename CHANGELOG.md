# Changelog

Changelog for the HA History Explorer Card.
(Using format and definitions from https://keepachangelog.com/en/1.0.0/)

## [v1.0.57] - 2026-04-14
### Changed
- Add resolveCssVar() for CSS variable color support — resolves CSS var(--...) strings in all user-supplied color config fields before passing to parseColor()

Allows the use of named colors in stateColors:

Example:
```yaml
stateColors:
  sensor.unavailable: "var(--state-unavailable-color)"
```

## [v1.0.56] - 2026-04-14
### Fixed
- Fix view window not advancing on interval-based refreshes — createContent() now calls updateHistoryAutoRefresh() instead of refresh()

## [v1.0.55] - 2026-04-14
### Fixed
- Fix defaultTimeRange restriction — allow any numeric timeRange value, not just predefined ranges

## [v1.0.54] - 2024-05-10
### Changed
- Switch from concatenating files, to using normal JS imports and exports. Hopefully making the build process more reliable and repeatable

## [v1.0.53] - 2024-05-07
### Added
- Adding full reference config, at full-reference-config.yaml, which explains all possible configuration options

## [v1.0.52] - 2024-05-02
### Changed
- First release from SpangleLabs fork
- Re-implement build system, switching to using yarn and webpack

## [v1.0.51] - 2023-11-24
Final release from original alexarch21 repository