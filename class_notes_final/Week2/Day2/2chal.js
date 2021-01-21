/*
Write a fucntion that takes two parameters:
- one parameter is for a first name,
- the other parameter is for a last name;
-have them come together in a variable inside the function-console.log 'Hello, my name is <your name>'
-call or invoke your function
*/

//MY ANSWER
function fullName(firstName, lastName){
    firstName = 'Harry'
    lastName = 'Dearing'
    let fullName = firstName + ' ' + lastName
        console.log(`Hello, my name is ${fullName}`);
}

fullName();

//TEACHER ANSWER

function fullName(fName, lName){
    let full = fName + ' ' + lName
        console.log(`Hello, my name is ${full}`);
}

fullName('Harry', 'Dearing');
