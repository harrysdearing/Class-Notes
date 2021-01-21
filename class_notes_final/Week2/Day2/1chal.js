/*

CHALLENGE

-Create a function that, when invoked, lists out the numbers 1-10

*/

let num = [1,2,3,4,5,6,7,8,9,10];

function oneToTen(num){
    for (let digit of num){
        console.log(digit);
    }
}
oneToTen(num);

function counting(){
    for (let i = 1; i <= 10; i++){
        console.log(i);
    }
}

counting();

//Given the array, create a function that lists out the values individually

let arr = ["Justin", "Ann", "Adam", "Joe"]
function name(){
    for (words of arr) {
        console.log(words);
    }
}

name();
