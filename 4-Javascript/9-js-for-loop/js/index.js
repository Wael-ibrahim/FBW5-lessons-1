// for (var i = 0 ; i <= 10 ; i++){
//     console.log(i)
// }

var stor =""
for (var i = 0 ; i <= 10 ; i++){
    
   // stor = stor + i 
    if (i <= 9){     // if (i != 10) { stor = stor + "," } without else
        stor += i +","
    }
    else {
        stor += i
    }
    
}
console.log(stor)


for (let i = 10 ; i < 50 ; i+=2){       // with this way 20 is Loop 
    
    console.log((i)+1)            

}

console.log('////////////////////')

for (let i = 10 ; i < 50 ; i++){         // with this way 40 is Loop 
    if(i % 2 != 0){
        console.log(i)
    }
}

console.log('////////////////////')

    for (let i = 10; i >= 0 ; i--) {
        
        console.log(i)
    }
    console.log('////////////////////')
    console.log('////////////////////')

    let sum=0
    for (let i = 10 ; i <= 50 ; i++){       
         sum +=i         
    }
    
    console.log(sum)

    document.write('hello world <br> and FBW5 <br>')
    
    
    
    
  for (let i = 0 ; i <= 10 ; i++){
    document.write(i + "<br>")
}

for (let i = 0 ; i <= 10 ; i++){
    for ( let x = 1; x <= 10; x++){
        document.write(x+"<br>")
    }
    document.write('Again<br>')
}