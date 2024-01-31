const assert = require('assert');
const { fuzzyMatch } = require('./index.js');

// Test case 1
const drivers = ["Sammy", "Sarah", "Sally"];
const name = "S";
const expectedResult = ["Sammy", "Sarah", "Sally"];

console.log(`Testing with drivers: ${drivers}`);
console.log(`Testing with name: ${name}`);

const result = fuzzyMatch(drivers, name);

assert.deepStrictEqual(result, expectedResult, `Expected ${expectedResult}, but got ${result}`);
console.log('Test case passed!');

module.exports = {
    fuzzyMatch
  };