// function isEven (num){
//     num = Number(num)
//     return num === 0 || !!(num && !(num%2))
    
// }
// console.log(isEven(7))

function isEven (num){
    if (num % 2 == 0) {
        return true
    }
        else {
            return false
        }
    
}
function checkNumber(num){
    if(isEven(num)){
        console.log("it is Even Number")
    }
    else {
        console.log("it is Odd Number")
    }
}
// checkNumber(4)
