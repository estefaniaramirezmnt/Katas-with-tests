// Given a number, return in an array all the previous numbers

function sequence(num) {
    let listOfNumbers = [];
    for (let i=1; i<=num; i++) {
        listOfNumbers.push(i);
    }
    return listOfNumbers;
}

var numberForTest = 11;
console.log(sequence(numberForTest)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]