let str = "Hello World"
console.log(str.search("World"))

console.log(str.slice(6, 8))

console.log("///////////////")

let findIndex = txt =>{
    return txt.indexOf(' ')+1
}
 console.log(findIndex("Hello World"))

 console.log("///////////////")

let findIndex1 = txt =>{
    let idx = txt.indexOf(' ')
    
    return txt.indexOf(' ',idx+1)+1
}
console.log(findIndex1("Hello nice World "))

/* 
let findIndex1 = txt =>{
    let firstSpace = txt.indexOf(' ')
    let secondSpace = txt.indexOf(' ',firstSpace + 1)
    return secondSpace + 1
    console.log(findIndex1("Hello nice World "))
}
*/ 
 console.log("///////////////")

function getSecond(txt){
    return txt.slice(findIndex(txt), (findIndex1(txt)-1))
}
console.log(getSecond("hi my name is wael"))

