const { default : TestRunner } = require("jest-runner");
const nameOfFriends = require(`./nameOfFriends`);

test ('Return only the numbers with 4 letters', () => {
    expect(nameOfFriends(["Ryan", "Kieran", "Jason", "Yous"])).toEqual(["Ryan", "Yous"]);
})

test ('Return an empty array if the input is null or empty', () => {
    expect(nameOfFriends([])).toEqual([]);
})