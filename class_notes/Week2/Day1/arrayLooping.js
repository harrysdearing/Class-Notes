//BRONZE
//Write a for loop that runs until it's reached the end of the alphabet array, and prints each letter to the console.

//MY CODE
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (letter in alphabet) {
    console.log(alphabet[letter]);
}

//TEACHER CODE
//would use the for of loop because it is referring to the item itself rather than the index number
//all of these would work

for (letter in alphabet) {
    console.log(alphabet[letter]);
};

for (letter of alphabet) {
    console.log(letter)
};

for (let i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i])
};

//SILVER
//Write a conditional that is nested inside of the for loop that checks if the index of each character in the alphabet array is even or odd. 
//If the index is even, console.log the letter.  if the index is odd, console.log 'the index is an odd number'.

//MY CODE
for (letter in alphabet) {
    if (letter % 2 == 0) {
        console.log(alphabet[letter]);
    } else {
        console.log('the index is an odd number');
    }
}

//TEACHER CODE

for (let i = 0; i < alphabet.length; i++) {
    if (i % 2 === 0) {
        console.log(alphabet[i]);
    } else {
        console.log('the index is odd');
    }
};

//GOLD
//Declare a variable of arr that is initialized as an empty array.  If the index of the character in the alphabet array is even, add that character
//to the variable of arr, and console.log arr.  if the index is odd - using string interpolation - console.log 'the index ____is an odd number'.
//Use google to search for an array method that allows you to add one or more elements to an array

//MY CODE
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr = []

for (letter in alphabet) {
    if (letter % 2 == 0) {
        arr.push(alphabet[letter]);
        console.log(arr);
    } else {
        console.log(`the index ${alphabet[letter]} is an odd number`);
    }
}

//TEACHER CODE

let arr = []

for (let i = 0; i < alphabet.length; i++) {
    if (i % 2 === 0) {
        arr.push(alphabet[i]);
        console.log(arr);
    } else {
        console.log(`the index ${i} is an odd number`);
    }
}