// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present). -->
// [true, true true] = 3

function counteringSheeps (arrayOfSheeps) {
    let countOfSheeps = 0;
    for (sheeps of arrayOfSheeps) {
        if (sheeps === true) {
            countOfSheeps += 1
        }
    }
    return countOfSheeps;
}

console.log(counteringSheeps([true, true, true]))
console.log(counteringSheeps([true, false, true, false, true, true]))

module.exports = counteringSheeps;