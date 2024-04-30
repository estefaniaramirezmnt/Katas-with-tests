function onlyNumbers(initialArray) {
    let arrayOfNumbers = [];
    for (let i = 0; i < initialArray.length; i++) {
        if (typeof (initialArray[i]) === "number") {
            arrayOfNumbers.push(initialArray[i])
        }
    }
    return arrayOfNumbers;
}

function onlyNumbers2(initialArray) {
    return initialArray.filter(Number.isInteger);
}

var test = [1, 2, 3, "a", "b", 4, "c"];
console.log(onlyNumbers(test))
console.log(onlyNumbers2(test))