function fullName(fName, lName, isReturned){
    let full = fName + ' ' + lName;
    console.log(`Hello, my name is ${full}`);
    if (isReturned){
        return full; //return allows you to use the result of the function
    }
    console.log("You didn't return full");
}

let myFullName = fullName('Harry', 'Dearing');

console.log(myFullName); //we must have return full above in order to view this