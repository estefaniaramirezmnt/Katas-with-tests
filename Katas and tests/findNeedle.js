// Find the word needle and write in which position it is

function findNeedleInString(sentence) {
    if (typeof sentence === "string") {
        sentence = sentence.split(", ");
    }
  return findNeedleInArray(sentence);
}

function findNeedleInArray(arr) {
  return `found the needle at position ${arr.indexOf("needle")}`;
}

var test1 = ["dog", "cat", "needle", "potato", "car"];
var test2 = "dog, cat, needle, potato, car";

console.log(findNeedleInArray(test1));
console.log(findNeedleInString(test2));

module.exports = { findNeedleInArray: findNeedleInArray, findNeedleInString: findNeedleInString }

/* 
module.exports.findNeedleInArray = findNeedleInArray;
module.exports.findNeedleInString = findNeedleInString;
*/