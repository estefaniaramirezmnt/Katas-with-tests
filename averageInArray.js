// Get the average of the numbers in an array

function averageInArray(array) {
  if (array.length === 0) {
    return "Please, enter an array";
  } else if (!Array.isArray(array)) {
    return "Please, enter a valid array";
  } else if (array.length === 1) {
    return "Please, enter an array with more than one number";
  } else {
    let result = 0;
    for (var i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result / array.length;
  }
}

module.exports = averageInArray;

// Get the average of an array of numbers using reduce

const averageArrayWithReduce = (array) => {
    return (array.reduce((a, b) => a + b) / array.length).toFixed(2);
}

const averageArrayWithReduce2 = (array) => {
    return Math.round((array.reduce((a, b) => a + b) / array.length) * 10) / 10
}