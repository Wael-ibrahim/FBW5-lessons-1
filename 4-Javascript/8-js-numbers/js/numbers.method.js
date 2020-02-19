let num1 = 535
console.log(num1.toString().replace(/5/g,'7'))

let num2 = parseInt("123.")    // 123 
// parsInt convert to integer, eval convert to number
let num3 = parseFloat("123.4")  // or eval 123.4
// parsFloat convert to decimal number

console.log(typeof(num2))
console.log(num2)
console.log(num3)

let num4 = 2.684
// toFixed will round the number and convert it to string
console.log(num4.toFixed(1))