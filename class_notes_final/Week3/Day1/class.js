// Create a Monsters Object 
// the monsters object should contain three keys in the object containing a monster name
// Each monster name key should contain an object including:
// traits: array containing at least 2 strings
// size: string
// description: string
// dangerous: boolean
// defeatMethods: an object containing tools to defeat as keys and descriptions of how to use as a string

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
let seth = {
  age: 18,
  isMarried: false,
  likes: ["programming", "working out"],
  birthPlace: {
    city: "North Vernon",
    state:"IN"
  }
}
console.log('All about me: ')
console.log(`Seth is ${seth.age} years old`);
console.log(`Seth is ${seth.isMarried ?  "married" : "not married"}.`)
console.log("Seth likes " + seth.likes[1] + " and " + seth.likes[0])
console.log("Seth was born in " + seth.birthPlace.city + ", " + seth.birthPlace.state);
/*
Objects are a data type that lets us store a collection of properties and methods.
===================================================================================
let objectName = {
  propertyName: propertyValue,
  propertyName: propertyValue,
  ...
};
*/
6:04
/* 
let recipeTitle = "Bread";
let recipeServings = 2;
let recipeIngredients = ["Flour", "Water"];
console.log(recipeTitle);
console.log("Serves: " + recipeServings);
console.log("Ingredients: " + recipeIngredients)
*/