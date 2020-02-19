// let arr = [2,4,1,9,5,7,6,3,2,7,1]
// function show(arr1){
//     for(i = 0 ;i < arr1.length ; i++){
//         document.write(arr1[i] + '<br>')
// }
// }


//show (arr)
let arr = [2,4,1,9,5,7,6,3,2,7,1]
let theSmallest = arr[0]
let theGreatest = arr[0]
 for (let i = 0; i < arr.length; i++) {
     if( arr[i] < theSmallest){
         theSmallest = arr[i]
     }
     if( arr[i] > theGreatest){
        theGreatest = arr[i]
    } 
 }
  
document.write('theSmallest: ' + theSmallest + '<br>')
document.write('theGreatest: ' + theGreatest + '<br>')

// document.write( '<br>')


// let arr = [2,4,1,9,5,7,6,3,2,7,1]

//  let theSmallest = arr[0]
//  for (let i = 1; i < arr.length; i++) {
//      if( arr[i] < theSmallest){
//          theSmallest = arr[i]
//      }
    
//  }
// document.write(theSmallest)

document.write( '<br><br><br>')


function avr(blaArr){
   let sum = 0 
    for (let  i = 0;  i < blaArr.length; i++) {
        sum += blaArr[i]
        
    }
    return sum /blaArr.length
}
document.write(avr([2,5,3,4]))


