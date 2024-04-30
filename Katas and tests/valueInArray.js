/* Given an array and a value, write a function that checks if the array contains the value (both can be numbers or strings)
Return true if the array contains the value*/

const valueInArray = (array, value) => {
    if (typeof array === "string") {
        array = array.split(" ");
    }
    return array.includes(value);
};

module.exports = valueInArray;

console.log(valueInArray("What a great kata", "a")); // true