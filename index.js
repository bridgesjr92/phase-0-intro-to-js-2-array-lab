// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
    return cats
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats
}


function destructivelyRemoveLastCat (name) {
    cats.pop(name)
    return cats
}


function  destructivelyRemoveFirstCat(name) {
    cats.shift(name)
    return cats
}




function appendCat(name) {
    let copyOfCats = [...cats];
    copyOfCats.push(name)
    return copyOfCats
}

function prependCat(name) {
    let copyOfCats = [...cats];
    copyOfCats.unshift(name)
    return copyOfCats
}


function removeLastCat (name) {
    let copyOfCats = [...cats];
    copyOfCats.pop(name)
    return copyOfCats
}


function removeFirstCat(name) {
    let copyOfCats = [...cats];
    copyOfCats.shift(name)
    return copyOfCats
}