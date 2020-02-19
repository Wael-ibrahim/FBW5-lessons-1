let arr = [1,3,8,2,4,6,7]
document.write(arr.toString() + '<br>')
document.write(arr.join('') + '<br>')

let r = 7 
let d = r 
r = 8 
document.write(d + '<br>')

let blaarr = [2,3]
let blaarr1 = blaarr
blaarr[0] = 6
document.write(blaarr1 + '<br>')


arr[arr.length] = 55 // add item to the end of the array
document.write(arr.toString() + '<br>')

arr.push(66)  // add item to the end of the array
document.write(arr.toString() + '<br>')

arr.pop()   // remove the last item of the array
document.write(arr.toString() + '<br>')

arr.shift()  // remove the first item of the array
document.write(arr.toString() + '<br>')

arr.unshift(100)  // add new item to the begining of the array
document.write(arr.toString() + '<br>')

// delete arr[3]  // clear the item with index but not delete it from the array
// document.write(arr.toString() + '<br>')

arr.splice(4, 2, 5) 
         // 4 : index to the changes.
         //  2 : number of the item that gonna be deleted after the index.
         // 5 : the item  that gonna be added after the index
document.write(arr.toString() + '<br>')

arr.splice(1, 2) // use splice to delete elements
         // 1: index of the start of deleted items
         // 2: how many items should be deleted
document.write(arr.toString() + '<br>')

let arr1 = [3,3,3,3,3,3,3,3,3,3,5]
let arr2 = arr1.concat(arr) 
document.write(arr.toString() + '<br>')
document.write(arr1.toString() + '<br>')
document.write(arr2.toString() + '<br>')

document.write(arr.toString() + '<br>')
let arr4 = arr.slice(1, 3)
document.write(arr4.toString() + '<br>')
document.write(arr.toString() + '<br>')

let arr5 = ['wael', 'ahmad', 'safa', 'hamoud', 'manish', 'abdul']
document.write(arr5.sort() + '<br>')


arr.sort((a, b) =>{ return a - b})  // sort ASI
document.write(arr.toString() + '<br>')

arr.sort((a, b) =>{ return b - a})  // sort DSI
document.write(arr.toString() + '<br>')


let arr6 = [2,9,3,-5,7,100,20]
document.write(arr6.sort() + '<br>')
