function myNumber(num) {
    if (num===0){
        return num
    } else {
        return myNumber(num-1) + ',' + num
    }
} 
console.log(myNumber(9))

console.log("/////////////////////////////////")

let arrowTextAdd = num => {   // wen more parameters we have writing in the brakets (num1, num2 )
    if (num == 0){
        return num
    } else {
        return arrowTextAdd(num-1) + ',' + num 
    }
    
}
  console.log(arrowTextAdd(3))