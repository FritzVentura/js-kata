"use strict";

// create a function called `mockify` that receives a string, 
// and returns a mocified version of that string.
 

function mockify(str) {
    const text = str;
    const letters = Array.from(str);
    letters.forEach(randomize);

    function randomize(value, index, array) {

        let letter = array[index];
        const rand = Math.random();
        if (rand < 0.5) {
            letter = letter.toUpperCase();
        } else {
            letter = letter.toLowerCase();
        }

        array[index] = letter;
    }
    let finalText = letters.join(" ");
    return finalText;
};
console.log(mockify('This is a test'));