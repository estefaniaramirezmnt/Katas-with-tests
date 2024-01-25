const { default: TestRunner} = require("jest-runner");
const abbreviateName = require(`./abbreviateName`);

test('if name is empty, returns "Please, enter a name"', () => {
    expect(abbreviateName('')).toBe('Please, enter a name');
});

test('if name is not a string, returns "Please, enter a valid name"', () => {
    expect(abbreviateName(123)).toBe('Please, enter a valid name');
});

test('returns the initials of a name and surname in capital letters separated by a dot', () => {
    expect(abbreviateName('Sam Harris')).toBe('S.H');
})