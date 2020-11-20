let x = 5;
let y = 6;
//      num1, num2 - these are added in order to get them into the function
//  x = 5 is getting passed to num1
//  y = 6 is getting passed to num2
//you only put something within the parenthesis if you're adding them for the first time within the function
function add2(num1, num2) {
    let total = num1 + num2
    console.log(`${num1} + ${num2} = ${total}`);
}

add2(x, y);
add2(7, 10);
