/*
How do we assign a value to a variable?
    A. We do it with the assignment operator "="
How do we change the value of a variable?
    A. We do it by assigning new value to to it. e.g. var = 0; x = 2. the new value of x will be equal to 2.
How do we assign an existing variable to a new variable?
    A. We set the new variable to be equal to the existing variable. e.g. var x = 10; let y = x. y will be equal to 10
Remind me, what are declare, assign, and define?
    Declare is a method used to create a variable type and when we assign a specific value to it, which can be number, string, function, array..., we are assigning value(s) to the variable that we created. Define is when we create a variable and assign the value to it directly. e.g. var x = 4.
What is pseudocoding and why should you do it?
    A. pseudocoding is the process of breaking down your code with a written step by step tasks. it is very important because it allow you to know what the code are supposed to do
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    A. About 80% percent of thinking and 20% of coding. 

*/

// Create a variable called firstVariable
var firstVariable;
// Assign it the value of the string "Hello World"
firstVariable = "Hello World"
// Change the value of this variable to some number
firstVariable = 1;
// Store the value of firstVariablein a new variable called secondVariable
var secondVariable = firstVariable;
// Change the value of secondVariableto any string.
secondVariable = "It was a success"
// What is the value of firstVariable?
//A. The value of the firstVariable is 1
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
var myName = 'Bertrand';
const intro = (name) => {
    return "Hello, my name is " + name;
}
let introduction = intro(myName);
console.log(introduction)

// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false & false || true);
console.log(false == false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// Declare a variable animal. Set it to be either "cow" or something else
var animal = "dog";
// Write code that will print out "mooooo" if the it is equal to cow
const cow = (type) => {
    if (type.toLowerCase() === "cow") {
        console.log("moooo")
    }
    // Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
    else {
        console.log("You're not a cow.")
    }
}
cow(animal)

// Commit