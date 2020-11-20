//Challenge:
//Create a variable named FB that takes numbers
//Write a conditional that:
//Prints out "Fizz" if the number is divisible by 3
//Prints out "Buzz" if the number is divisible by 5
//Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
//Write as If else, switch, & Ternary

//MY ANSWER
let fb = 30;

//ELSE IF
if ((fb % 3) > 0){
    console.log('This is not divisible by 3');
}   else {
    console.log('Fizz');
}

if ((fb % 5) > 0){
    console.log('This is not divisible by 5');
}   else {
    console.log('Buzz');
}

if ((fb % 3) == 0 && (fb % 5) == 0){
    console.log('Fizz Buzz');
}   else {
    console.log('This is not divisible by 3 and 5');
}

//TERNARY
(fb % 3) > 0 ? console.log('This is not divisible by 3') : console.log('Fizz');
(fb % 5) > 0 ? console.log('This is not divisible by 5') : console.log('Buzz');
(fb % 3) == 0 && (fb % 5) == 0 ? console.log('Fizz Buzz') : console.log('This is not divisible by 3 and 5');

//SWITCH
switch(true){
    case (fb % 3) > 0:
        console.log('This is not divisible by 3');
        break;
    default:
        console.log('Fizz')
}

switch(true){
    case (fb % 5) > 0:
        console.log('This is not divisible by 5');
        break;
    default:
        console.log('Buzz')
}

switch(true){
    case (fb % 3) == 0 && (fb % 5) == 0 :
        console.log('Fizz Buzz');
        break;
    default:
        console.log('This is not divisible by 3 and 5')
}

//TEACHER ANSWER

// IF ELSE
let FB = 30;
if (FB % 15 === 0) {
  console.log('Fizz Buzz');
} else if (FB % 3 === 0) {
  console.log('Fizz');
} else if (FB % 5 === 0){
  console.log('Buzz');
} else {
  console.log(FB);
};

// SWITCH

switch (true) {
  case (FB % 15 === 0):
    console.log('Fizz Buzz');
    break;
  case (FB % 3 === 0):
    console.log('Fizz');
    break;
  case (FB % 5 === 0):
    console.log('Buzz');
    break;
}

// TERNARY

(FB % 15 === 0) 
  ? console.log('Fizz Buzz')
  : (FB % 3 === 0) ? console.log('Fizz')
  : (FB % 5 === 0) ? console.log('Buzz')
  : console.log(FB)

// FIZZ BUZZ WITH FOR LOOP
for (let i = 0; i<=100; i++) {
  if (i % 15 === 0) {
    console.log('Fizz Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0){
    console.log('Buzz');
  } else {
    console.log(i);
  };
}
