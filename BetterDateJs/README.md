# BetterDateJs
An improved version of the JavaScript Date class with enhanced functionality and better usability.

## Features
* Better `getDay`, `getMonth` functions with options for number, short, and long formats.
* Better `getDate` function with options for short and padded formats.
* Better `getYear` function with options for old and full year formats.
* Better `getHours`, `getMinutes`, and `getSeconds` functions with options for short and padded formats.
* New `getFullTime` function for formatted time with customizable separators.
* Better `getTimezoneOffset` function with options for hours and minutes.
* New functions to get user's timezone, continent, country, and zone.
* New `getFullFormattedDate` function for formatted date with customizable separators.
* New `getFullDate` function for getting the full date in a formatted way.
* New `formatDate` function for custom date formatting also now has warnings if the format contains unknown formats.
* UTC versions are included as well.

## Installation
```bash
npm install @spark4444/better-date-js
```

## Examples
```javascript
let date = new Date();

// Get day in different formats
console.log(date.getDay()); // "Sunday"
console.log(date.getDay(true)); // "0"
console.log(date.getDay(false, true)); // "Sun"

// Get month in different formats
console.log(date.getMonth()); // "January"
console.log(date.getMonth(true)); // "0"
console.log(date.getMonth(false, true)); // "Jan"

// Get full time with custom separator
console.log(date.getFullTime("-", true, true, true)); // "12-34-56"

// Get user's timezone information
console.log(date.getTimeZone()); // "America/New_York"
console.log(date.getContinent()); // "America"
console.log(date.getCountry()); // "New_York"
console.log(date.getZone()); // "(Eastern Standard Time)"

// Get UTC full time with custom separator
console.log(date.getUTCFullTime("-", true, true, true)); // e.g. "17-34-56"

// Get full formatted date with custom separator
console.log(date.getFullFormattedDate("-", true, true, true)); // "12-01-2020"

// Get full date with custom options
console.log(date.getFullDate(true, true, true, true, true, true)); // "Sunday January 12.01.2020 12:34:56 GMT+3 (Eastern Standard Time)"

// Format date with custom format
console.log(date.formatDate("{DDDD}, {MMMM} {dd}, {yyyy} {hh}:{mm}:{ss} {t}")); // "Sunday, January 12, 2020 12:34:56 America/New_York"

// Get UTC full formatted date with custom separator
console.log(date.getUTCFullFormattedDate("-", true, true, true)); // "12-01-2020"

// Get UTC full date with custom options
console.log(date.getUTCFullDate(true, true, true, true, true)); // "Sunday January 12.01.2020 17:34:56 (Eastern Standard Time)"

// Format UTC date with custom format
console.log(date.formatUTCDate("{DDDD}, {MMMM} {dd}, {yyyy} {hh}:{mm}:{ss} {t}")); // "Sunday, January 12, 2020 17:34:56 America/New_York"
```

### Current state of this project
finished