/*
CHALLENGE

Make a tip calculator using a function
Make it RETURN the value
Capture that returned value ina  VARIABLE
Print that variable
*/

//calcTip(100, 0.20) -> 120

//MY ANSWER - Normal Function
function calcTip(billAmount, tipPercent){
    let tipAmount = billAmount * tipPercent
        return tipAmount + billAmount
}

console.log(calcTip(50, .10));

//MY ANSWER - Arrow Function
let calcTip = (billAmount, tipPercent) => {
    let tipAmount = billAmount * tipPercent;
    return tipAmount + billAmount;
}

console.log(calcTip(50, .10));

//TEACHER ANSWER
let calcTip = (bill, tipPerc) => {
    let TotalMult = 1 + tipPerc;
    return bill * TotalMult;
}

let totalBill = calcTip(100, 0.2);
console.log(totalBill);
