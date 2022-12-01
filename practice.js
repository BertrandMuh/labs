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

// var Ball = function (ballType = 'regular') {
//     // your code goes here
//     this.ballType = ballType
// };
// let ball1 = new Ball();
// let ball2 = new Ball("super");
// //console.log(ball2)

// //console.log(ball2.ballType)
// String.prototype.toAlternatingCase = function () {
//     // Define your method here :
//     let newArray = this.split('')
//     console
// }

// 'Hello World'.toAlternatingCase()