// let num1 = 2.4
// let rounded = Math.round(num1)
// console.log(rounded)
// console.log(typeof(rounded))

// console.log(Math.PI)
// let num2 = Math.sqrt(9)
// console.log(num2)

// console.log(Math.random())
// console.log(Math.round(Math.random()*2))


function myNamber(){
    let num = Math.round(Math.random()*4)
    switch (num){
        case 0:
            return "what are you doing?"
            break
        case 1:
            return "wht's your Name?"
            break
        case 2:
            return "wht's your Age?"
            break
        case 3:
            return "wht's your Hobbys?"
            break
        case 4:
            return "wht's your Dream?"
            break
}
}
console.log(myNamber())

