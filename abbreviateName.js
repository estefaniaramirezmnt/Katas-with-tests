// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them. Sam harris => S.H

const abbreviateName = (name) => {
  if (name === "") {
    return "Please, enter a name";
  } else if (typeof name !== "string") {
    return "Please, enter a valid name";
  } else {
    let nameArr = name.split(" ");
    let newName = nameArr[0][0] + "." + nameArr[1][0];
    return newName.toUpperCase();
    // return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }
};

console.log(abbreviateName("Sam Harris"));

module.exports = abbreviateName;
