let fruits = ['Banana','Apple','watermelon']
// for (let i = 0;  i< fruits.length; i++) {
//     document.write(fruits[i] + '<br>')
    
// }

fruits.forEach(function(blaFruit){
    document.write(blaFruit + '<br>')
})

document.write('<br> <br>')

//fruits.forEach((blaFruit) => { document.write(blaFruit + '<br>')   })
fruits.reverse().forEach(function(blaFruit){
    document.write(blaFruit + '<br>')
})

document.write('<br> <br>')

let check = false
fruits.forEach((blaFruit) => {
    if(blaFruit.indexOf('water') != -1){
        check = true
    }
})
document.write(check + '<br>')



document.write('<br> <br>')

 

function checkNum(arr, num ){
let stor = 0
    arr.forEach((blaarr) => {
        if(blaarr == num){
            stor++
        }
    })
    return stor
}
let ourArray = [1,5,5,6,1,1,5,7,8,-1]
document.write(checkNum(ourArray ,1 ) + '<br>')


document.write('<br> <br>')

// the same but with for
function counterFor(arr1, num1){
    let stor = 0
    for (let  i = 0;  i< arr1.length; i++) {
        if(arr1[i] == num1){
            stor++
        }
        
    }
    return stor
}
let ourArray1 = [1,5,5,6,1,1,5,7,8,-1]
document.write(counterFor(ourArray1 ,5 ) + '<br>')


document.write('<br> <br>')


                        // the first solution
let arr1 = ['Ahmad','Tim','Safa','Shirin','Wael','Alen','Abdulrahman','Hamood', 'Felix','Felix','Neda','Manish','Chumky','Bashar','Rebecca', 'Belal', 'Farooq', 'Haroon','Ingo']
function searchLetter(arr,letter){
    let stor = 0
    arr.forEach(item=> {
        if (item.search(letter)!= -1) {
            stor++
        }
    } )
    return stor
}
document.write(searchLetter(arr1,/a/gi)  + '<br>')

document.write('<br> <br>')


                        // the seconde solution
function letterFinder(arr3, chr){
    storage = 0 
    arr3.forEach(item => {
        if (item.indexOf(chr.toLowerCase()) != -1 || item.indexOf(chr.toUpperCase()) != -1)
        storage++   
    }) 
    return storage
}
let nameArray = ['Ahmad','Tim','Safa','Shirin','Wael','Alen','Abdulrahman','Hamood', 'Felix','Felix','Neda','Manish','Chumky','Bashar','Rebecca', 'Belal', 'Farooq', 'Haroon','Ingo']
document.write(letterFinder(nameArray, "a"))