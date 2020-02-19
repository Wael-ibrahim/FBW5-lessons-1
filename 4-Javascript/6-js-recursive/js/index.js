// function hopla(num) {
//     if (num == 0){
//         return num
//     }
//     else {
//         console.log(hopla(num - 1))
//         return num
//     }
// }
// hopla(5)

function add(num){
    if(num == 0){
        return 0
    } 
        return add(num - 1) + num 
    
}
//  add(4) = add(3)+4
            //add(2)+3
            // add(1)+2
            // add(0)+1
            // 0

            
function factor(num){
    if(num == 1){
    return 1
} else {
    return factor(num - 1) * num 
}
}

// factor(5)  factor(4)*5   120
            //factor(3)*4   24
            //factor(2)*3   6
            //factor(1)*2   2
            //factor 1
