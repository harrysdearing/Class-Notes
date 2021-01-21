//QUESTION 1
// Write a function that find the Max of three numbers

let arr = [12,5,4];
function max(){
    let max = arr[0];
    for (num of arr){
        if (num > max){
            max = num;
        }
    }
    return max;
}

console.log(max(arr));




//QUESTION 2
// Write a function to sum all numbers in a array

let arr = [12,5,4];
function sum(){
    let total = 0;
    for (num of arr){
        total += num
    }  
    return total;
}

console.log(sum(arr));

//QUESTION 2 FOR ME TO LEARN MORE
// Write a function to subtract the numbers in order

let arr = [12,5,4];
function subtract(num1, num2, num3){
    for (num of arr){
        num1 = arr[0];
        num2 = arr[1];
        num3 = arr[2];
    }  
    return total = num1 - num2 - num3;
}

console.log(subtract(arr));


//QUESTION 3
// Write a function that reverses a string

let name = ['Harry'];

function reverseString(){
    let reverseName = ''
    for (letters of name){
        reverseName = letters.split('').reverse().join('');
    } 
    return reverseName;
} 

console.log(reverseString());

//QUESTION 4
// Write a function that takes a strings and counts the number
// of upper and lower case letters and console.logs them

function stringCaseCounter(stringToCount){
    let uppers = 0;
    let spaces = 0;
    for (letter of stringToCount){
        if (letter == letter.toUpperCase()){  //if letter is an uppercase letter
            if (letter != ' '){ //if letter is not a space
                uppers++; //count the total number of uppercase letters
            } else {
                spaces++; //else count the number of spaces
            }
        }
    }
    console.log(`uppers: ${uppers}\
                \nspaces: ${spaces}\
                \nlowers: ${stringToCount.length - uppers - spaces}\
                \n${stringToCount}`) //escape a character is \.  
}

stringCaseCounter('This is A test stRIng');

//SPLIT THE LETTERS IN A STRING INTO 3 DIFFERENT BUCKETS -- UpperCase, LowerCase, and other then count the number in each bucket
let word = 'HoW ManY Upper and LOWer case letters?';

let wordArray = word.split("");
let upperCase = [];
let lowerCase = [];
let other = []

function counting(){
    let uppers = 0;
    let lowers = 0;
    let others = 0;
    for (letters of wordArray){
        if (letters == letters.toUpperCase() && letters != '?' && letters != ' '){
            upperCase.push(letters);
            uppers++;
        } else if (letters == letters.toLowerCase() && letters != '?' && letters != ' '){
            lowerCase.push(letters);
            lowers++;
        } else {
            other.push(letters);
            others++;
        }
    }
    return `There are a total of ${uppers} uppercase letters in this string that include: ${upperCase}.\
           \nThere are a total of ${lowers} uppercase letters in this string that include: ${lowerCase}.\
           \nThe are ${others} remaining spaces in this string that include: ${other}` 
}

console.log(counting());

//console.log(counting());

let arr = []

for (let i = 0; i < alphabet.length; i++){
    if (i % 2 === 0){
        arr.push(alphabet[i]);
        console.log(arr);
    }   else {
        console.log(`the index ${i} is an odd number`);
    }
};

//QUESTION 5
// Write a function that takes a list of numbers and returns a new list
// containing only the unique numbers

var word = "abc def";
// Step 1 and 2.
var wordArray = word.split(" ").map(word => word.split(""));

console.log(wordArray);