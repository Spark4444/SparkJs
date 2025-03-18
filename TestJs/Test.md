## Features
* Run multiple test cases with input, expected, and actual values.
* Output test results to the console.
* Get a summary of test results as an array of strings.
* Get a boolean result for each test case.
* Static method to run tests without creating an instance.

## Examples
```javascript
// Define test cases
let testCases = [
    { input: 'input1', expected: 'expected1', actual: 'actual1' },
    { input: 'input2', expected: 'expected2', actual: 'actual2' },
    { input: 'input3', expected: 'expected3', actual: 'actual3' }
];

// Create a Test instance and run tests
let test = new Test(...testCases);
test.run();

// Get output summary
console.log(test.output);

// Get boolean results
console.log(test.result);

// Use static method to run tests
Test.test(
    { input: 'input1', expected: 'expected1', actual: 'actual1' },
    { input: 'input2', expected: 'expected2', actual: 'actual2' },
    { input: 'input3', expected: 'expected3', actual: 'actual3' }
);
```
