const { default: TestRunner} = require("jest-runner");
const countPositiveSumNegative = require(`./countPositiveSumNegative`);

test ('if array is empty or null, returns an empty array', () => {
    expect(countPositiveSumNegative([])).toEqual([]);
})

test ('Return the count of positive numbers and the sum of negative numbers', () => {
    expect(countPositiveSumNegative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])).toBe('10, -65');
})