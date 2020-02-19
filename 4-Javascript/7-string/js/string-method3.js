let str = "Hello World"
console.log(str.slice(-11, -6))

console.log(str.substring(0,5))

console.log(str.substr(6,3))

console.log(str.replace("Hello", "Hi"))

let str2 = "i love life , i love programming , i love you"
console.log(str2.replace(/love/g, 'hate'))
console.log(str2.replace(/i /ig, 'you '))

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.concat(" I am wael"))

let str3 = " ibrahim.88wael@yahoo.de "
console.log(str3.trim()) // trim will remove the whitspaces from both sides 

console.log(str3.charAt(2))
console.log(str3.charCodeAt(2))