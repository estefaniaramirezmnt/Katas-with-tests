const { default: Testrunner} = require("jest-runner");
const valueInArray = require(`./valueInArray`);

test('returns true if the array contains the value', () => {
    expect(valueInArray("What a great kata", "a")).toBe(true);
    expect(valueInArray(["what", "a", "great", "kata"], "kat")).toBe(false);
    expect(valueInArray(["what", "a", "great", "kata"], "kata")).toBe(true);
});