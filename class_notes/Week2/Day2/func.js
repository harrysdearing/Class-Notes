// Scope

let x = 12;

function scope(){
    let x = 33;
    console.log(x);
}

//scope();
//console.log(x);

let y = 12;
function scope(){
    y = 33;
    console.log(y);
}

scope();
console.log(y);

var x = 12;

function varTest(){
    var x = 33;
    if (true) {
        var x = 45; // we should use let because var will read anywhere 
        console.log(x); //runs first (45)
    }
    console.log(x); //runs second (45) because it is within the function
}

varTest();
console.log(x); //runs third (12) and is outside the function so goes with the global variable (x)


