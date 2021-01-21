// MEDIUM DIFFICULTY
//QUESTION 1 - INTERMEDIATE - UNABLE TO FINISH
/*
You will be given two extremely similar arrays, but exactly one of the items in an array 
will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

Create a function that returns whether the first array is slightly superior to that of the second.

isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.

isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true
isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true
isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false
isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false
*/

//able to compare all numbers but not if arrays are different or for letters -- thought through this way too much.  Could have been much simpler.  See solution below**
let arr1 = [1,2,6];
let arr2 = [1,2,4];

function isFirstSuperior(arr1, arr2) {
    let total1 = 0;
    let total2 = 0;
	if (typeof arr1[0] === 'number' && arr1[1] === 'number' && arr1[2] === 'number'){
        for (numbers1 of arr1){
            total1 += numbers1
        }
        for (numbers2 of arr2){
            total2 += numbers2
        }
        if (total1 > total2){
            return true;
        } else {
            return false;
        }
    }
}
console.log(typeof arr1[0]);
console.log(typeof arr2[0]);
console.log(isFirstSuperior(arr1, arr2));

//CORRECT ANSWER FOR QUESTION 7

function isFirstSuperior(arr1, arr2) {
	for(let i = 0; i < arr1.length; i++) {
		if(arr1[i] > arr2[i]) {
			return true;
		}
	}
	return false;
}

console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])); //➞ true
console.log(isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"])); //➞ true
console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4])); //➞ false
console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"])); //➞ false