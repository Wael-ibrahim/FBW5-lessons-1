/*
function calc(op, num1, num2){
    if (op=="+"){
        let result = num1 + num2
        return result
    }
    else if(op=="-"){
        let result = num1 - num2
        return result
    }
    else if(op=="*"){
        let result = num1 * num2
        return result
    }
    else if(op=="/"){
        let result = num1 / num2
        return result
    }
    else{
        return ("wrong op")
    }
  
}
console.log(calc("+", 9, 5))

*/


            //the same opration  but in another way

function calc (opt, num1, num2){
    switch(opt) {
        case "+":
        return num1 + num2
        break
        case "-":
        return num1 - num2
        break
        case "*":
        return num1 * num2
        break
        case "/":
        return num1 / num2
        break
        default:
            return "it is not a valid opration"

    }
}
console.log(calc("+", 5, 4))

