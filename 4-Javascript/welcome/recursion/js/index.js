let arr = [6,9,3,[10,50,[6,3,9,4] ,60],'str',5,4]
// let storage = 0
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] == "object"){
//         for(let j = 0; j < arr[i].length; j++){
//             if(typeof arr[i][j] =="object"){
//                 for (let k = 0; k < arr[i][j].length; k++) {
//                     storage += arr[i][j][k]
                    
//                 }
//             }else{
//                 storage += arr[i][j]
//             }
            
//         }
//     }else{
//         storage += arr[i]
//     }
    
// }

function calculate(array){
    let storage = 0
    for (let i = 0; i < array.length; i++) {
       if(typeof array[i] == "number"){
           storage += array[i]
       }else{
           if(typeof array[i] == "object"){
            storage += calculate(array[i])
           }
       
       }
        
    }
    // the sum of all numbers in this array
    return storage
}
console.log(calculate(arr))


//////////////////////////////

// this is with adding plus

function pow(n) {
    
    if(n <= 0)
        return n 
        return n + pow(n-1)
    
    
}
console.log(pow(10))

//////////////////////

// this is with minus
function calc(n) {
    
    if(n < 0){
        return n + calc(n+1)
    }else if(n === 0){
        return n
    }else{
        return n + calc(n-1)
    }
         
       
    
    
}
console.log(calc(-10))