const { default: TestRunner } = require("jest-runner");
const findNeedle = require(`./findNeedle`);

const validArray = ["dog", "cat", "needle", "potato", "car"];
const validArrayExpectedResult = "found the needle at position 2";

test("Given a valid array, return the index of the word needle", () => {
  expect(
    findNeedle.findNeedleInArray(validArray)
  ).toEqual(validArrayExpectedResult);
});

test("Given a valid string, return the index of the word needle", () => {
    const validString = validArray.join(", ");
    expect(
      findNeedle.findNeedleInString(validString)
    ).toEqual("found the needle at position 2");
  });


// for debug tests: npm test --watch