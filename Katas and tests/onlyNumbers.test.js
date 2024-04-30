const { default: TestRunner} = require("jest-runner");
const onlyNumbers = require(`./onlyNumbers`);

test ('Given an array, return only the numbers', () => {
    expect(onlyNumbers([1, 2, 3, "a", "b", 4, "c"])).toEqual([1, 2, 3, 4]);
})

