# Better Date Js
This JavaScript library is made for better formatting for the default JavaScript Date object

## Installation

1. Press the blue button `<> Code`
2. Hover over the `Download Zip` button and click it to download the zip version of this repository

### &nbsp;&nbsp;&nbsp;Or

Use the git clone command to copy it onto your computer
```bash
git clone https://github.com/Spark4444/BetterDateJs
```

## Usage
* Import the library into your project using 
<br>
 `<script src="path to the file you downloaded"></script>`

## Features
* Better `getDay` function with options for number, short, and long formats.
* Better `getMonth` function with options for number, short, and long formats.
* Better `getDate` function with options for short and padded formats.
* Better `getYear` function with options for old and full year formats.
* Better `getHours`, `getMinutes`, and `getSeconds` functions with options for short and padded formats.
* New `getFullTime` function for formatted time with customizable separators.
* Better `getTimezoneOffset` function with options for hours and minutes.
* New functions to get user's timezone, continent, country, and zone.
* UTC versions are included as well.

## Examples
```javascript
let date = new Date();

// Get day in different formats
console.log(date.getDay()); // e.g. "Sunday"
console.log(date.getDay(true)); // e.g. "0"
console.log(date.getDay(false, true)); // e.g. "Sun"

// Get month in different formats
console.log(date.getMonth()); // e.g. "January"
console.log(date.getMonth(true)); // e.g. "0"
console.log(date.getMonth(false, true)); // e.g. "Jan"

// Get full time with custom separator
console.log(date.getFullTime("-", true, true, true)); // e.g. "12-34-56"

// Get user's timezone information
console.log(date.getTimeZone()); // e.g. "America/New_York"
console.log(date.getContinent()); // e.g. "America"
console.log(date.getCountry()); // e.g. "New_York"
console.log(date.getZone()); // e.g. "Eastern Standard Time"

// Get UTC full time with custom separator
console.log(date.getUTCFullTime("-", true, true, true)); // e.g. "17-34-56"
// It will include hours, minutes, seconds by default.
//  even if you don't specify if they are present or not in parameters
// Also default seperator is ":"
```

## Current state of this project
Finished