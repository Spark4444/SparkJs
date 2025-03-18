// Class for testing code with test cases and outputting results to console
// Usage:
// Test.test(
//     { input: 'input1', expected: 'expected1', actual: 'actual1' },
//     { input: 'input2', expected: 'expected2', actual: 'actual2' },
//     { input: 'input3', expected: 'expected3', actual: 'actual3' }
// );
// Output:
// Input: "input1"
// Expected: "expected1"
// Actual: "actual1"
// Test: PASSED
// -------------------------
// Input: "input2"
// Expected: "expected2"
// Actual: "actual2"
// Test: PASSED
// -------------------------
// Input: "input3"
// Expected: "expected3"
// Actual: "actual3"
// Test: PASSED
// -------------------------
class Test {
    constructor(...testCases) {
        this.testCases = testCases;
    }

    run() {
        this.testCases.forEach(({ input, expected, actual }) => {
            console.log(`Input: "${input}"`);
            console.log(`Expected: "${expected}"`);
            console.log(`Actual: "${actual}"`);
            console.log(`Test: ${expected === actual ? 'PASSED' : 'FAILED'}`);
            console.log('-------------------------');
        });
    }

    get output() {
        return this.testCases.map(({ input, expected, actual }) => {
            return `Input: "${input}"; Expected: "${expected}"; Actual: "${actual}"; Test: ${expected === actual ? "PASSED" : "FAILED"};`;
        });
    }

    get result() {
        return this.testCases.map(({ input, expected, actual }) => {
            return actual === expected ? true : false;
        });
    }

    static test(...testCases) {
        let testInstance = new Test(...testCases);
        testInstance.run();
    }
}

module.exports = Test;