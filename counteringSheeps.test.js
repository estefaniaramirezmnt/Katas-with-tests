const { default: TestRunner} = require("jest-runner");
const counteringSheeps = require(`./counteringSheeps`);

test ('returns with a number, the amount of times that the word true appears in an array', () => {
    expect(counteringSheeps([true, true, true])).toBe(3);
    expect(counteringSheeps([true, false, false, true])).toBe(2);
})
