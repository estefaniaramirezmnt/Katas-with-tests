/* Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
const result = countPositivesSumNegatives(input);
result = / [10, -65]
*/

function countPositiveSumNegative (arrayOfNumbers) {
    if (arrayOfNumbers === null || arrayOfNumbers.length === 0) {
        return []
    }
    let countOfPositiveNumbers = 0;
    let sumOfNegativeNumbers = 0;
    for (num of arrayOfNumbers) {
        if (num > 0) {
            countOfPositiveNumbers += 1;
        }
        if (num < 0) {
            sumOfNegativeNumbers += num
        }
    }
    return `${countOfPositiveNumbers}, ${sumOfNegativeNumbers}`
}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
const result = countPositiveSumNegative(input);
// 10, -65

module.exports = countPositiveSumNegative;