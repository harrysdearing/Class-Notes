//Write two variables.  One will store your name and another will store a friend's name.  
//Find out what property you can use to check how long the names are.  Console log how many letters are in each name.

let myName = 'Harry';
let friend = 'Johnny';

console.log(myName.length);
console.log(friend.length);


//Expand on what you have already done and write a conditional to see who has the longer name.  
//Using string interpolation console log who's name is longer.  
//Example: My name is longer than Adam's

if (myName.length > friend.length){
    console.log(`${friend}'s name is shorter than ${myName}'s name`)
} else if (friend.length > myName.length){
    console.log(`${myName}'s name is shorter than ${friend}'s name`)
} else {
    console.log('Our names are the same length!')
}

//Interpolation
//lets you use strings with dynamic content (they require backticks)  backticks are ``

//my original answer
// let longestName = 0;

//if (myName.length > friend.length){
//    longestName = myName;
//} else {
//    longestName = friend;
//}
//let string = `${longestName} has the longest name`
//console.log(string);


//In the console log include how many letters difference there are between the names.
//Example result: Adam's name is shorter than mine by 4 letters.
//There is also one additional case that should be handled that has not been mentioned so far.  See if you can add that to your conditional!

if (myName.length > friend.length){
    let letters = myName.length - friend.length
    console.log(`${friend}'s name is shorter than ${myName}'s name by ${letters} letter`)
} else if (friend.length > myName.length){
    let letters = friend.length - myName.length
    console.log(`${myName}'s name is shorter than ${friend}'s name by ${letters} letter`)
} else {
    console.log('Our names are the same length!')
}

//my answer
//let difference = friend.length - myName.length;
//    console.log('My name is shorter than Johnny by', difference, 'letter');