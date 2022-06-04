/*
    CIT 281 Project 1
    Name: Anna Anton
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


let a = "abcdefghijklmnopqrstuvwxyz"
let c = getRandomInteger(5,26);
let string1 = "";

for (i = 0; i <= c; i++) {
    let b = getRandomInteger(0, 26);
    string1 += a.charAt(b);
}
console.log(string1);