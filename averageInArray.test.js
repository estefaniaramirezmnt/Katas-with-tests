const { default : TestRunner } = require("jest-runner");
const averageInArray = require(`./averageInArray`);

test ('if array is empty, returns "Please, enter an array of integers"', () => {
    expect(averageInArray([])).toBe('Please, enter an array of integers');
});

test ('if array is not an array, returns "Please, enter a valid array"', () => {
    expect(averageInArray(123)).toBe('Please, enter a valid array');
});

test ('if array contains only one number, return "Please, enter an array with more than one number"', () => {
    expect(averageInArray([1])).toBe('Please, enter an array with more than one number');
    expect(averageInArray([23])).toBe('Please, enter an array with more than one number');
})

test ('returns the average of the numbers in an array', () => {
    expect(averageInArray([5, 4, 2, 1])).toBe(3);
});