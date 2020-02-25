let matrix = [ 
    [3, 4, 88, 7, 64, 22, 49, 55, 11],
    [4, 4, 64, 7, 6, 8, 23, 42, 53],
    [5, 6, 77, 48, 2, 11, 58, 46, 11],
    [1, 7, 97, 9, 5, 3, 82, 42, 89],
    [5, 8, 9, 87, 34, 3, 5, 64, 75],
    [33, 8, 45, 58, 94, 3, 4, 25, 11],
    [93, 4, 6, 7, 6, 3, 17, 13, 11],
    [3, 8, 79, 4, 8, 231, 51, 29, 94],

]
          // The First solution

// for (let i = 0;  i < matrix.length; i++) {
//     for (let x = 0; x < matrix.length; x++) {
//         document.write(matrix[i][x] + '<br>')
        
//     }
    
// }

             // The Second solution

function printNewLine(arr) {
    arr.forEach(item => {
        item.forEach(subItem => {
            
            document.write(subItem + '<br>')
            
        })
    });
}             
//printNewLine(matrix)

function add(arr2) {
    stor = 0
    arr2.forEach(item2 => {
        storage = 0
        item2.forEach(sumItem => {
            storage = storage + sumItem
        })
        document.write(storage +'<br>')
        stor = stor + storage
    })
    document.write(stor +'<br>')
}
//add(matrix)    


function gread(arr4) {
   let num = arr4[0][0] 
    arr4.forEach(item3 => {
        item3.forEach(subItem => {
           if (subItem > num){
               num = subItem
           }
        })
    })
    document.write(num)
}

 gread(matrix)


function gread(arr4) {
    let max = arr4[0][0] 
     arr4.forEach(item3 => {
         item3.forEach(subItem => {
            if (max < subItem){
                max = subItem
            }
         })
     })
     return max
 }
 //document.write(gread(matrix) + '<br>')

 let treeArray = ['ahmad',30,['omar', 5,['Ali',2,['fbw5',20,[]]]],['blabla',99,[]]]

 function recursivePrint(arr) {
    
    arr.forEach(item => {
        if(typeof(item) == 'string'){
            document.write(item + '<br>')
        } else{
            if(typeof(item) == 'object'){
                recursivePrint(item)
            }
        }
    })
    
 }
 //recursivePrint(treeArray)




 function strReveser(str) {
     
     let arr = str.split('')
     
     return arr.reverse().join(' ')
    
 }
document.write(strReveser('ahmad'))