// Find the word needle and write in which position it is

function findNeedle(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }
}

module.exports = findNeedle;