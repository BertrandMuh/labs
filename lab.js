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
// // Commit

// // Make a variable that holds a person's age; be semantic
var personAge = 17;
// Write code that will print out "Here are the keys!", if the age is 16 years or older,
if (personAge > 16) {
    console.log('Here are the keys!')
}
//if the age is younger than 16, a message should print "Sorry, you're too young."

else {
    console.log("You are still young for this.")
}

// // Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++) {
    console.log(i)
}
// // Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i <= 40; i++) {
    console.log(i);
}
// // Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i < 40; i += 3) {
    console.log(i)
}
// // Print out the numbers that are within the range of 1 - 100
// // Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(i, "<-- is an even number")
    }
    else {
        console.log(i);
    }
}

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// For numbers divisible by both three and five, be sure your code prints both messages

for (let i = 0; i <= 100; i++) {
    if (i > 1 && i % 15 == 0) {
        console.log("I found a", i + ". High five! Three is a crowd. High five!");
    }
    else if (i > 1 && i % 5 == 0) {
        console.log("I found a", i + ". High five!")
    }
    else if (i > 1 && i % 3 == 0) {
        console.log("I found a", i + ". Three is a crowd")
    }
}

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let bank_account = 0;
for (let i = 0; i <= 10; i++) {
    bank_account += i;
}
// Check your work! Your bank_account should have $55 in it.
console.log(bank_account)
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
let balance = 0;
for (let i = 0; i <= 100; i++) {
    balance += i * 2;
}
console.log(balance)
// Check your work! Your bank_account should have $10,100 in it.

// What are the things in an array called?
//A. they are called items or elements.
// Do Arrays guarantee those things will be in order?
//A. The array does not guaranti that the elemens in it will be in order.
// What real-life thing could you model with an array?
//A. You can model a list of continent on Earth.

// Create an array that contains three quotes and store it in a variable called quotes
let quotes = ["Spread love everywhere you go. Let no one ever come to you without leaving happier.", "When you reach the end of your rope, tie a knot in it and hang on.", "Always remember that you are absolutely unique. Just like everyone else."];

// Given the following array 
const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
randomThings[0]
// Change the value of "Hello"to "World"
randomThings[randomThings.indexOf("Hello")] = "World";
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);
//after making the change, we use console.log(array) to check it. Although the array being a constant, we were able to change a value inside the array because doing so does not change the nature of the array.

// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// What would you write to access the 3rd element of the array?
ourClass[2];
// Change the value of "Github" to "Octocat"
ourClass[ourClass.indexOf("Github")] = "Octocat";
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

// Given the following array: 
const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. 
myArray.push("Aegon");
//Add another string of your choice to the end of the array.
myArray.push("Good");
// Remove the 5from the beginning of the array.
console.log(myArray);

myArray.splice(4, 1)
console.log(myArray)

// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
console.log(myArray);
// Remove the string of your choice from the end of the array.
myArray.pop()
console.log(myArray);
// Reverse this array using Array.prototype.reverse(). 
myArray.reverse()
console.log(myArray)
//Did you mutate the array?
//Yes
//What does mutate mean?
//It means to modify the way something looks
//Did the .reverse()method return anything?
//the method return the same object starting with last element in that object.


//Create a variable that contains an integer.
var x = 11;
// Write an if ... elsestatement that:

// console.log()s "little number" if the number is entered is less than 100
if (x < 100) {
    console.log("little number")
}
// console.log()s big numberif the number is greater than or equal to 100.
else {
    console.log('big number');
}

// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
if (x < 5) {
    console.log("little number")
}
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey
else if (x > 10) {
    console.log("big number")
}
else {
    console.log("monkey");
}

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

//   What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset)
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset)
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
let tomShirt = thomsCloset[0][0];
// In the same way, access one item from Thom's pants array.
let tomPants = thomsCloset[1][0];
// Access one item from Thom's accessories array.
let tomAccessoire = thomsCloset[2][1];
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${tomShirt}, ${tomPants}, ${tomAccessoire}!`)
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas"
console.log(thomsCloset[1])

// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?
const printGreeting = name => "Hello there, " + name + "!"
console.log(printGreeting("Bertrand"));

const printCool = name => name + " is cool;";
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
console.log(printCool('Captain Reynolds'));
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
const calculateCube = number => Math.pow(number, 3)
console.log(calculateCube(5));
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const isVowel = letter => {
    let vowel = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < vowel.length; i++) {
        if (vowel.includes(letter.toLowerCase())) {
            return true;
        }
        else {
            return false;
        }
    }
}
console.log(isVowel('E'))

// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
const getTwoLengths = (str1, str2) => {
    return [str1.length, str2.length];
}

console.log(getTwoLengths("hank", "Hippopopalous"))

// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

const getMultipleLengths = (array) => {
    return array.map(x => x.length)
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
const maxOfThree = (num1, num2, num3) => {
    let result;
    let arrayNumber = [num1, num2, num3];
    for (let i = 0; i < arrayNumber.length; i++) {
        //set the result to be equal to the first item or the next greater value in the array
        if (result == undefined || result < arrayNumber[i]) {
            result = arrayNumber[i]
        }
    }
    return result;
}
console.log(maxOfThree(6, 9, 1));

// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
const printLongestWord = (array) => {
    let word;
    array.forEach((el) => {
        //set the word to be equal to the first item or the next word with the longest length in the array
        if (word == undefined || word.length < el.length) {
            word = el;
        }
    })
    return word
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "abcdefghijkl", "Max", "Peanutbutter", "big", "Todd"]));

// Create an object called user.

// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
let user = {
    name: "bertrand",
    email: "brt@gmail.com",
    age: 20,
    purchased: [],
}
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user.age++
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
user.location = "Dallas, Texas";
console.log(user);

// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
user.purchased.push("carbohydrates")
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
user.purchased.push("peace of mind")
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push("Merino jodhpurs")
// Console.log just the "Merino jodhpurs" from the purchasedarray.
console.log(user.purchased[user.purchased.indexOf("Merino jodhpurs")]);

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
    name: "john",
    age: 25,
    location: "Arlington, Texas",
    purchased: []
}

// Console.log just the friend's name
console.log(user.friend.name)
// Console.log just the friend's location
console.log(user.friend.location)
// CHANGE the friend's age to 55
user.friend.age = 55;

// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.
user.friend.purchased.push("The One Ring", "A latte");
console.log(user.friend.purchased[user.friend.purchased.indexOf("A latte")]);

// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i])
}
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for (let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i])
}

// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.
const updateUser = () => {
    user.age++;
    user.name = user.name.toUpperCase()
}
updateUser()
console.log(user)

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.
const oldAndLoud = (person) => {
    //change the name and age of the user.
    if (user.name.toLowerCase() == person.toLowerCase()) {
        user.name = user.name.toUpperCase();
        user.age++
        // change the name of the friend if the provided name is the same as a friend name in the list.
        if (person.toLowerCase() == user.friend.name.toLowerCase()) {
            user.friend.name = user.friend.name.toUpperCase();
            user.friend.age++;
        }
    }
    else {
        if (person.toLowerCase() == user.friend.name.toLowerCase()) {
            user.friend.name = user.friend.name.toUpperCase();
            user.friend.age++;
        }
    }
}
oldAndLoud('JoHn');
console.log(user)