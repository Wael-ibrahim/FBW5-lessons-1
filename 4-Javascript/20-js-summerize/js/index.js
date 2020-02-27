let arr = [-5, 6, 0, 6,12,3,3]
function removeDupel(array){
    let result=[]
    array.forEach(element => {
        if (result.indexOf(element) == -1){
            result.push(element)
        }
    });
    return result
}
document.write(removeDupel(arr))


let arr1 = [1,2,3,4]
let arr2 = [1,2,3,4]
let arr3 = arr1
arr3[0] = 55
console.log(arr1)
if(arr1 == arr3){
    console.log('equal')
}else{
    console.log('not equal')
}

console.log('////////////////')
document.write('<br>')



function checkequal(arr1, arr2) {
    
    if (arr1.length == arr2.length) {
        for (let i = 0;  i < arr1.length; i++) {
            if(arr1[i] != arr2[i]){
                return false
            }
            } 
                return true
            
     } 
       return false
}
document.write(checkequal([1,2,3,4], [1,2,3,4]))

document.write('<br>')

//////////////////////////////////////////////////
//////////   First Way    ////////////////////////
///////////////////////////////////////////////////

function findshared(array1,array2) {
        let storage = []
        for (let i = 0; i < array1.length; i++) {
            for (let x = 0; x < array2.length; x++) {
                if(array1[i] == array2[x]){
                    if (storage.indexOf(array1[i]) == -1){
                        storage.push(array1[i])
                    }
                }
            }
        }
        return storage
    }

 document.write(findshared([-5,1,0,10,1,1],[1,6,7,1,0,0]))

 document.write('<br><br>')


 //////////////////////////////////////////////////
//////////   Seconde Way    ////////////////////////
///////////////////////////////////////////////////

 function findshared1(arr1,arr2){
     let result =  []
     arr1.forEach(item => {
         if( arr2.indexOf(item) > -1){
             if(result.indexOf(item) == -1){
                 result.push(item)
             }
         }
     })
     return result
 }
 document.write(findshared1([-5,1,0,10,1,1],[1,6,7,0,0]))


