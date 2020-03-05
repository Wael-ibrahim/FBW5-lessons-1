// let somePromise = new Promise((resolve, reject)=>{
//     if(true){
//         resolve('I am done')
//     }else{
//         reject('there is an error')
//     }
// });

// somePromise.then((value)=>{
// console.log(value)
// }).catch((value)=>{
//     console.log(value)
// })



/////////////////////////////////////

let somePromise = new Promise((resolve, reject)=>{
    let xhr = new XMLHttpRequest();
xhr.open('GET', '/data.json')
xhr.send();
xhr.onload = function(){
    if(xhr.status == 200){
       
       let joke =JSON.parse(xhr.response) 
       resolve (joke)
       
     }else{
        reject ('error')
     }
}
});

somePromise.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})