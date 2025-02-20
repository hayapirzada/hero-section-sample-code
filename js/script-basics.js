// this is a comment in js
/*this is a multiline comment */

//how to print output
console.log("this is my first output");
console.warn("warning from js");
console.error("error from js");

//variable in JS
//dataType variableName = value;
//variable = value;
//JS: scope_specifier variableName = value;

var name = "john"; //global scope if declared using var(DO NOT USE THIS)

let lastname ="doe"; //local scope_specifier --prefered.

const PI = 3.14; //this will not allow to reassign to variable PI

//dataTypes: string, number, boolean

//arithmetic operators: + - / *

//logical operators: && || !

// some more ways to interact with/output data to your clients
//alert("John Doe"); // dont use

//bruteforce way to getting inout from user
//let age = prompt("What is your age");
//alert(age);

//branching and decison statements:
let age = 18
if(age > 21){
    console.log("the user can drive")
} else {
    console.log("The user cannot drive")
}

// string concatentation techniques
let firstName = "John";
let lastName = "wick";
console.log("The full name is " + firstName + lastName + "HelloWorld");
// more effecinet way in JS to acheive this
// String literals
console.log(`The full name is ${firstName}${lastName} HelloWorld`);

// loops
let loopIterator = 1;
while (loopIterator < 1){
    console.log(`This is a iteration #: ${loopIterator}`);
    loopIterator = loopIterator + 1;
}

//array declaration
//let studentGPA = [];
let studentGPA = [3.14, 2.0, 3.5, 4.0];
let studentRecord = ["John", 3.15, "Senior", ["fishing", "swimming"]];
console.log(studentGPA[2]);
//for(let index = 0; index < array.length; index++){
    //const element = array(index)
//}

//structures in JS
const studentOne =
{
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "321 strt",
        zip: 48309,
        state: "MI",
    },
    hobby: ["swim", "fish", "dive"],
    isSenior: true,
};
console.log(studentOne.lastName);
console.log(studentOne.address.zip);
console.log(studentOne.hobby[2]);


const student = [
    {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "321 strt",
        zip: 48309,
        state: "MI",
    },
    hobby: ["swim", "fish", "dive"],
    isSenior: true,
},

{
    firstName: "Jane",
    lastName: "Doe",
    address: {
        street: "123 strt",
        zip: 48309,
        state: "MI",
    },
    hobby: ["swim", "fish", "dive"],
    isSenior: true,
}];
console.log();

//functions
// traditional way of declaring a fucntion in JS
function sum(param1, param2){
    //declare or additional logic here:
    return (param1 + param2);
}

//invoke or call the fucntion
let sumOutput = sum(2,5);

// Arrow function syntaxx in JS

//nput --> function body --> output
let name = (param1, param2) => {
    //function body

};

let sumArrowfunction = (input1, input2) => {
    retun (input1 + input2);
};

//call above function
console.log(sumArrowfunction(2,5));


