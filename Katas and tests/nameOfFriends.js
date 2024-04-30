// Make a list of your friends whose names have exatly 4 letters.

function nameOfFriends(arrayOfFriends) {
    let listOfFilteredFriends = [];
    for (let firstName of arrayOfFriends) {
        if (firstName.length === 4) {
            listOfFilteredFriends.push(firstName)
        }
    }
    return listOfFilteredFriends;
}

function nameOfFriends2(arrayOfFriends) {
    return arrayOfFriends.filter(personName => personName.length === 4);
}

var test = ["Ryan", "Kieran", "Jason", "Yous"]
console.log(nameOfFriends(test))
console.log(nameOfFriends2(test))


module.exports = nameOfFriends;