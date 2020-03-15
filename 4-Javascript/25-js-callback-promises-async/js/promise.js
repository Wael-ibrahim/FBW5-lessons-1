let study2Hours = true

let ahmadPromise = new Promise((resolve, reject)=>{
    if(study2Hours){
        resolve('you will be a developer')
    }else{
        reject('I dont know maybe you will or maybe you will not')
    }
})

ahmadPromise.then(messege =>{
    console.log(messege)
}).catch(errorMessege =>{
    console.log(errorMessege)
})