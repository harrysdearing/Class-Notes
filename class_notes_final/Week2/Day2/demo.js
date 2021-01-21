//I can run this function from the command line (terminal) using node demo.js
console.log("Hello World");

// Solve for fizzbuzz

// make it dynamic

//write the solve for fizzbuzz first 1....100
for (let i = 1; i <= 100; i++){
    if (i % 15 == 0){
        console.log('FizzBuzz');
    } else if (i % 5 == 0){
        console.log('Buzz');
    } else if (i % 3 == 0){
        console.log('Fizz');
    } else {
        console.log(i);
    }
    console.log(i);
}
//put this block of code into a function that we can reuse
function solve(){
    for (let i = 1; i <= 100; i++){
        if (i % 15 == 0){
            console.log('FizzBuzz');
        } else if (i % 5 == 0){
            console.log('Buzz');
        } else if (i % 3 == 0){
            console.log('Fizz');
        } else {
            console.log(i);
        }
    }
}

solve();

//now we set parameters so that we can change this function anytime we call the function
function solve(start, end){
    for (let i = start; i <= end; i++){
        if (i % 15 == 0){
            console.log('FizzBuzz');
        } else if (i % 5 == 0){
            console.log('Buzz');
        } else if (i % 3 == 0){
            console.log('Fizz');
        } else {
            console.log(i);
        }
    }
}

solve(5, 20);
//    5 is taking the parameter for start
//    20 is taking the parameter for end