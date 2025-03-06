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
console.log(date.getTimeZone()); // "Eastern Standard Time"

// Get UTC full time with custom separator
console.log(date.getUTCFullTime("-", true, true, true)); // "17-34-56"
```

## Current state of this project
Finished