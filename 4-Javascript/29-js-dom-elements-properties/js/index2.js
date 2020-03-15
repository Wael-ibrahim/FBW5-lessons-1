window.onload = ()=>{
let input = document.querySelector('#someInput')

// console.log(input.getAttribute('placeholder'))
// input.setAttribute('type','checkbox')
// input.setAttribute('calss','someClass')


//th first solution

// let str = 'Enter your Name'
// let arr = str.split('')
// i = 0
// stor = ''
// setInterval(()=>{
//     if(i < arr.length){
//         stor += arr[i]
//         input.setAttribute('placeholder',stor)
//         i++
//     }else{
//         i=0
//         stor = ''
//     }
// },200)


// the second solution
let placeholder = input.getAttribute('placeholder') 
let counter = 0
setInterval(()=>{
    counter++
    let txt = placeholder.substr(0, counter)
    input.setAttribute('placeholder',txt)
    if(counter == placeholder.length){
        counter = 0
    }
    
},200)
}