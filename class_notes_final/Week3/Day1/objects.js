/*
  Overview 
  [] Display the advantage of Objects
  [] Challenge 1
  [] introduce objects
  [] accessing object properties/ changing properties
  [] methods
*/
let sethAge = 18
let sethMarried = false
                    //0            // 1
let sethLikes = ["programming", "working out"]
let sethBirthCity = "North Vernon"
let sethBirthState = "IN"
// let seth = {
//   age: 18,
//   isMarried: false,
//   likes: ["programming", "working out"],
//   birthPlace: {
//     city: "North Vernon",
//     state:"IN"
//   }
// }
// console.log('All about me: ')
// console.log(`Seth is ${seth.age} years old`);
// console.log(`Seth is ${seth.isMarried ?  "married" : "not married"}.`)
// console.log("Seth likes " + seth.likes[1] + " and " + seth.likes[0])
// console.log("Seth was born in " + seth.birthPlace.city + ", " + seth.birthPlace.state);
/*
Objects are a data type that lets us store a collection of properties and methods.
===================================================================================
let objectName = {
  propertyName: propertyValue,
  propertyName: propertyValue,
  ...
};
*/
// let seth = {
//   age: 18,
//   isMarried: false,
//   likes: ["programming", "working out"],
//   birthPlace: {
//     city: "North Vernon",
//     state:"IN"
//   }
// }
// seth.age = seth.age + 1;
// seth.age++;
// console.log(seth.age);
// seth.birthPlace.city = "Columbus";
// while(seth.age <= 40){
//   if(seth.age === 24){
//     seth.isMarried = true;
//     seth.wife = "Emily";
//   }
//   console.log(seth.age);
//   console.log(seth.isMarried);
//   console.log(seth.wife)
//   seth.age++
// }
// seth.pets = 
// [{name: "Winston", furColor: "Orange"},
// {name: "Yui", age: 2}]
// console.log(seth.pets[0].furColor);
let seth = {
  age: 18,
  isMarried: false,
  likes: ["programming", "working out"],
  birthPlace: {
    city: "North Vernon",
    state:"IN"
  },
  eat: function(food){
    console.log('Yum, I love ' + food);
  },
  sleep: function(numMinutes){
    for(let i = 0; i < numMinutes; i++){
      seth.age++
      console.log(seth.age);
    }
  }
  
}
let danielle = {}
seth.eat("Wendy's spicy nuggs");
seth.sleep(30);
let x = [1,2, 65, 32]
console.log(x.length)