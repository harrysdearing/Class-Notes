//How to run the debugger -- Choose the line we want to stop on (put red dot to the left of the line number)
//Then click on the triangle, click "Run and Debug" then open in Node.js
//step into goes into a function
//step out of gets you out of a function
//for a function, you want to step into it to see if the output is what you expected it to be.

//GLOBAL SCOPE SHOWS US ALL OF THE ITEMS IN THE JAVASCRIPT LIBRARY WE CAN USE

function reverseString(inputString){
    return inputString.split('').reverse().join('');
                        //split turns it into "H" "a" "r" "r" "y"
                        //reverse turns it into "y" "r" "r" "a" "H"
                        //join turns it into "yrrah"
}

let reversedString = reverseString('Harry');
console.log(reversedString);

let stringDotSplitReturn = 'This is a test'.split()
console.log(stringDotSplitReturn);
let arrayDotReverseReturn = stringDotSplitReturn.reverse()
console.log(arrayDotReverseReturn);
let arrrayDotJoinReturn = arrayDotReverseReturn.join('')
console.log(arrrayDotJoinReturn);

