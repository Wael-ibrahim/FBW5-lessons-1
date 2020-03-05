let htmlobj = document.getElementsByTagName('h1');// hte first h1 tag

console.log(htmlobj) // => a spicial type of objects (you can use indexing)
// Indexing is array [number]
//for objects : obj[string] or obj.prop

for (let i = 0; i < htmlobj.length; i++) {
    
    console.log(htmlobj[i])
}

// second solution

Array.from(htmlobj).forEach(element=>{
    console.log(element)
})

let obj = {
    t:"t",
    b:"b",
    ob:{
        ddd:5,
        st:[5,20,60,"someString",{
            pr: true
        }]
    }
}
console.log(obj[0]) //=> NOT WORKING

console.log(obj.ob.ddd)//=> 5

console.log(obj.ob.st[3])//=> someString

console.log(obj.ob.st[4].pr)

////////////////////

let firstH1 =document.getElementsByTagName('h1')[0]
console.log(firstH1)
firstH1.innerHTML
console.log(firstH1.innerHTML)    // the privious value
firstH1.innerHTML = "a new value" // changing the content
console.log(firstH1.innerHTML)   //new value


let secondh1 =document.getElementsByTagName('h1')[1]
secondh1.innerHTML = "Wael Albash" 
console.log(secondh1.innerHTML)


