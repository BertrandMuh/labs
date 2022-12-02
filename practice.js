//create a fucntion that will give the sum of the number 
function digitalRoot(n) {
    //repeat this code as long as the argument > 10
    while (n >= 10) {
        //make sure the number is positive. Then convert the number to an array of string and then to number.
        let numberArray = String(Math.abs(n)).split('').map(el => Number(el));
        //get the sum of the item in the Array and assign it to argument which is n in this case
        n = numberArray.reduce((a, b) => a + b, 0)

    }
    console.log(n)
}

digitalRoot(456)

var ball = function (ballType = 'regular') {
    // your code goes here
    this.ballType = ballType
};
let ball1 = new ball();
console.log(ball1)
let ball2 = new ball("super");
console.log(ball2)


String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    let newString = [];
    //change letter to upper case if lower case
    for (let i = 0; i < this.length; i++) {
        if (this[i] === this[i].toLowerCase()) {
            newString.push(this[i].toUpperCase())
        }
        //change letter to lowercase if upper case
        else {
            newString.push(this[i].toLowerCase())
        }

    }
    return newString.join("")
}

"hello world".toAlternatingCase()
"HELLO WORLD".toAlternatingCase()
"hello WORLD".toAlternatingCase()
"HeLLo WoRLD".toAlternatingCase()
"12345".toAlternatingCase()
"1a2b3c4d5e".toAlternatingCase()
"String.prototype.toAlternatingCase".toAlternatingCase()

function highAndLow(numbers) {
    // ...
    //get the largest value
    let max = Math.max(...numbers.split(' ').map(x => x));
    //get the lowest value
    let min = Math.min(...numbers.split(' ').map(x => x))
    return `${max} ${min}`;
}
let result = highAndLow("1 2 3 4 5");
console.log(result)