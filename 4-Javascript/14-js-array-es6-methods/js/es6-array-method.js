let arr = [2, -2, 6, 3, 4]
let arr1= []
for ( i = 0; i < arr.length; i++) {
      arr1[i] = arr[i] * 2
     
}
document.write(arr1)

document.write('<br>')
///////////////////////////////////
let arr3 = [2, -2, 6, 3, 4]

let newArr = []
arr3.forEach(num => {
    newArr.push(num * 2)
})
document.write(arr3 + '<br>')
document.write(newArr + '<br>')

////////////////////////////////////////////
//map will return a  NEW  array with the changes of orginal array items
let newArr2 = arr.map(item => item * 3)     //return
document.write(newArr2 + '<br>')

////////////////////////////////////////

let blaArr = arr.filter(item => { return item > 0 && item < 4 })
document.write(blaArr + '<br>')