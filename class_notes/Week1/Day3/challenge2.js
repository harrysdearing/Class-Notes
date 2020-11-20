//MY ANSWERS

//Create an object that contains a string, number, boolean, and object.
//console.log the type of one of the values in the object.

let company = {
    mission : "create customized solutions for the print industry",
    years : 2,
    founder : "Harry"
}

let myBiz = {
    companyName : "H4",
    employees : 4,
    isStartUp : true,
    info : company
    
}

console.log(typeof myBiz.info);

//Write a conditional that checks the type of one of the values stored in the object
//console log the data type.  if the value is not a string, number, boolean, or object console log 'What are you?!'

let dataType = myBiz.isStartUp;

if (typeof dataType === 'string'){
    console.log('I am a String!');
} else if (typeof dataType === 'boolean'){
    console.log('I am a Boolean!');
} else if (typeof dataType === 'object'){
    console.log('I am an Object!');
} else if (typeof dataType === 'number'){
    console.log('I am a Number!');
} else {
    console.log('What are you?!');
}


//TEACHER ANSWERS
//Create an object that contains a string, number, boolean, and object.
//console.log the type of one of the values in the object.

let object = {
    name : 'Link',
    hearts : 10,
    isZelda : false,
    weapon: {sword: 'Master Sword'}
}

console.log(typeof object.name);

//Write a conditional that checks the type of one of the values stored in the object
//console log the data type.  if the value is not a string, number, boolean, or object console log 'What are you?!'

let value = object.hearts;

if (typeof value === 'string'){
    console.log('This value is a string');
} else if (typeof value === 'number'){
    console.log('I am a Number!');
} else if (typeof value === 'boolean'){
    console.log('I am a Boolean!');
} else if (typeof value === 'object'){
    console.log('I am an Object!');
} else {
    console.log('What are you?!');
}