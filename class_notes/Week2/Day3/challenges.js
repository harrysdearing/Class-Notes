//QUESTION 1
// Write a function that find the Max of three numbers

//FIRST WAY TO SOLVE
function getMaxNum(num1, num2, num3){
    let result = num1; //when i've looked at one number what's my max number
    if (num2 > result){
        result = num2;
    }
    if (num3 > result){
        result = num3;
    }
    return result;
}

console.log(getMaxNum(4, 13, 52)); //52

//SECOND WAY TO SOLVE
function getMaxNum(a, b, c){
    let test = [a, b, c]
    let max = a;  // saying the current max will start at a
    for (num of test){ //we can make up num.  this is saying for the value of the test array
        if (num > max){ // if the number is greater than the maximum num
            max = num;
        }
    }
    return max;
}

console.log(getMaxNum(4, 13, 52)); //52

//THIRD WAY TO SOLVE
// You can use max to find the highest number
function getMaxNum(a, b, c){
    return Math.max(a, b, c)
}

console.log(getMaxNum(4, 13, 52)); //52

//How to find the highest number in an array
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

function getMaxNumFromArray(x){
    if (x && x.length > 0){ //if x and x is more than one thing
        let max = x[0]; //first set the highest number to the first item in the array
        for (num of x){ //loop through all the numbers
            if (num > max){
                max = num;
            }
        }
        return max;
    }
}

console.log(getMaxNumFromArray(arr));

//QUESTION 2
// Write a function to sum all numbers in a array

//EXAMPLE 1
let numbers = [1,2,3,4,5];

function sumList(numList){ //we can choose our parameter names
    let total = 0; //start the bucket
    for (num of numList){
        total += num; //could also do total = total + num where total is 0 and num is all of the numbers in the array -- putting the values in the bucket
    }
    return total; //return the bucket
}

console.log(sumList(numbers));

//EXAMPLE 2
let numbers = [1,2,3,4,5];

function sumList(numList){
    let total = 0;
    for (let i = 0; i < numList.length; i++){
        total += numList[i]
    }
    return total;
}

console.log(sumList(numbers));

//EXAMPLE 3
function sumList(numList){
    return numList.reduce((a, b) => a + b, 0); //reduce is a function that accepts up to four arguments (array method)
                                                //(a, b) are the values in the array.  we are making these values add a + b.  0 is the starting value.  
}

console.log(sumList([1, 2, 3, 4, 5, 6]));

//QUESTION 3
// Write a function that reverses a string

//EXAMPLE 1
function reverseString(a){
    let result = ''; //result = a blank string
    for (let i = a.length - 1; i >= 0; i--){ //starting the index at the last letter.  We must do the length of the string - 1 since an array starts at 0.  
                                             //ending at the first letter.  then we're doing i-- to go backwards
        result += a[i];
    }
    return result;
}

console.log(reverseString('This is something to reverse'));

//EXAMPLE 2
function reverseString(a){
    let result = [];
    let length = a.length;
    for (let i = 0; i < length; i++){
        result.push(a.charAt(length - i - 1)); //push method takes in a collection and adds it to the array
                                           //charAt() method returns the character at the specified index in a string
    }
    return result.join('');
}

console.log(reverseString('This is something to reverse'));

//EXAMPLE 3
function reverseString(a){
    return a.split('').reverse().join(''); //the split turns it into an array and breaks it all out.  reverse turns it around and join brings all of the letters together.
}

console.log(reverseString('This is something to reverse'));

// Write a function that takes a strings and counts the number
// of upper and lower case letters and console.logs them

//STEP 1
function stringCaseCounter(stringToCount){
    return stringToCount;
}

console.log(stringCaseCounter('This is a test string'));

//STEP 2
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

// Write a function that takes a list of numbers and returns a new list
// containing only the unique numbers

//EXAMPLE 1
function findUniques(a){
    a = [1,2,3,4,5,6,7,3,6,1];
    let result = []
    for (num of a){
        let match = false;//i went through the whole array and didn't find a match.  
        for (unum of result){
            if (num == unum){ //if the number is a unique number
                match = true; //i'm saying IT IS a unique number
            }
        }
        if (!match){//if there is not a match
            result.push(num);
        }
    }
    return result;
}

console.log(findUniques());

//EXAMPLE 2

let a = [1,2,3,4,5,6,7,3,6,1];
function findUniques(){
    let result = []
    for (num of a){
        let match = false;//i went through the whole array and didn't find a match.  
        for (unum of result){
            if (num == unum){ //if the number is a unique number
                match = true; //i'm saying IT IS a unique number
            }
        }
        if (!match){//if there is not a match
            result.push(num);
        }
    }
    return result;
}

console.log(findUniques(a));

//EXAMPLE 3
function findUniques(a){
    let result = []
    for (num of a){
        let match = false;//i went through the whole array and didn't find a match.  
        for (unum of result){
            if (num == unum){ //if the number is a unique number
                match = true; //i'm saying IT IS a unique number
            }
        }
        if (!match){//if there is not a match
            result.push(num);
        }
    }
    return result;
}

console.log(findUniques([1,2,3,4,5,6,7,3,6,1]));

//EXAMPLE 4
function findUniques(a){
    return Array.from(new Set(a)); //array into a set into an array again
}
console.log(findUniques([1,2,3,4,5,6,7,3,6,1]));
