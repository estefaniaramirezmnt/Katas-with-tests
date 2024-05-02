// Find the word needle and write in which position it is

function findNeedleInString(sentence) {
    if (typeof sentence === "string") {
        sentence = sentence.split(", ");
        console.log(sentence);
        // [ 'dog', 'cat', 'needle', 'potato', 'car' ]
    }
  return findNeedleInArray(sentence);
}

function findNeedleInArray(arr) {
  return `found the needle at position ${arr.indexOf("needle")}`;
}

var test = ["dog", "cat", "needle", "potato", "car"];
var test2 = "dog, cat, needle, potato, car";


/* 
function findNeedle(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }
}
*/

module.exports = { findNeedleInArray: findNeedleInArray, findNeedleInString: findNeedleInString }