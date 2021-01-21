//QUESTION 1
// Create a function that takes an array and returns the first element.
function getFirstValue(arr){
    return arr[0];
}   

console.log(getFirstValue([1,2,3]));

//QUESTION 2
//Write a function that converts hours into seconds.

function howManySeconds(hours){
    return hours *= 60*60;
}

console.log(howManySeconds(2));
console.log(howManySeconds(10));

//QUESTION 3
// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
//matchHouses(1) ➞ 6
//matchHouses(4) ➞ 21
//matchHouses(87) ➞ 436

function matchHouses(step) {
    if (step < 1){
        return 0;
    } else if (step == 1){
        return 6;
    } else {
        step *= 5
        return 1 + step;
    }
}

console.log(matchHouses(1)); //6
console.log(matchHouses(4)); //21
console.log(matchHouses(87)); //436

//QUESTION 4
//Create a function that takes the age and return the age in days.

function calcAge(age) {
    age *= 365
    return age;
}

console.log(calcAge(65)); //43725
console.log(calcAge(0)); //0
console.log(calcAge(20)); //7300

//QUESTION 5
//Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
	num = num + 1
    return num;
}
console.log(addition(0)); //1
console.log(addition(9)); //10
console.log(addition(-3)); //-2

//QUESTION 6
/*
Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

If f returns the larger number, return the string f.
If g returns the larger number, return the string g.
If the functions return the same number, return the string neither.
*/

function whichIsLarger(f, g) {
	if (f() > g()){
        return 'f';
    } else if (g() > f()){
        return 'g'
    } else {
        return 'neither';
    }
}

console.log(whichIsLarger(() => 5, () => 10)); //➞ "g"
console.log(whichIsLarger(() => 25,  () => 25)); //➞ "neither"
console.log(whichIsLarger(() => 505050, () => 5050)); //➞ "f"

//QUESTION 7

//You will be given an array of drinks, with each drink being an object with two properties: name and price. 
//Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ]

function sortDrinkByPrice(drinks) {
    return drinks.sort((a, b) => (a.price > b.price) ? 1: -1)
}

console.log(sortDrinkByPrice(drinks)); //➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

//QUESTION 8

/*
In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.

The first number is the major version.
The second number is the minor version.
The third number is the patch (bug fixes).
Write three separate functions, one to retrieve each element in the semantic versioning specification.
*/

function retrieveMajor(semver) {
    return semver.split(".")[0]
}
function retrieveMinor(semver) {
	return semver.split(".")[1]
}

function retrievePatch(semver) {
	return semver.split(".")[2]
}

console.log(retrieveMajor("6.1.9")); //➞ "6"
console.log(retrieveMinor("6.1.9")); //➞ "1"
console.log(retrievePatch("6.1.9")); //➞ "9"

console.log(retrieveMajor("12.1.0")); //➞ "12"
console.log(retrieveMinor("2.1.0")); //➞ "1"
console.log(retrievePatch("2.1.0")); //➞ "0"

//QUESTION 9
/*
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. 
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

function addUp(num) {
    let total = 0;
    for (i = 1; i <= num; i++){
        total += i;
    }
    return total;
}

console.log(addUp(4)); //10
console.log(addUp(13)); //91
console.log(addUp(600)); //180300
