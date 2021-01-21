function reverseString(inputString){
    return inputString.split('').reverse().join('');
                        //split turns it into "H" "a" "r" "r" "y"
                        //reverse turns it into "y" "r" "r" "a" "H"
                        //join turns it into "yrrah"
}

let reversedString = reverseString('Harry');
console.log(reversedString);

// Adapter Pattern
let wordArr = ['Harry','is','using','the','adapter','pattern','right','now'];

function arrayToString(a){
    return a.join('')
}

console.log(reverseString(arrayToString(wordArr)));

//console.log(true > 1);

//let x = []; //this is okay
//let x = ''; //this is false
//let x = " "; //this is true
//if (x > 0){}

//this tries to interpret left to right and because it tries to cast to the same type
console.log(3 > 2 > 1);  // 3 is greater than 2 gives us true then it tries to say true > 1 which is false

//CALLBACK

let wordArr = ['Harry','is','using','the','adapter','pattern','right','now'];

function arrayToString(a){
    return a.join('');
}

function apply(func, data){
    return func(data);
}

let result = apply(arrayToString, wordArr);

console.log(result);

//wordArr is bound to data which is bound to a

let harryApply = apply; //in this I am giving the function a new name

harryApply(console.log, 'This is a test')

console.log(apply(function test(x){return x*x}, 3)); 
    //i want some function that takes in an x and when it takes in an x
    //we are passing a function
    //i had the function called apply

//This is a simple use of a call back
apply(console.log, 'This is data for the callback');


//RECURSION

function printOne(arr){
    if (arr.length > 0){
        console.log(arr[0]);
        printOne(arr.slice(1))
    }
}

printOne(wordArr);