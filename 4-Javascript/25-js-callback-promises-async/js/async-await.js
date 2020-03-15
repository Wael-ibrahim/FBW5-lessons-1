let grade = 60
let stop1year = true

let softPromise = new Promise ((resolve, reject)=>{
    if(grade >= 60){
        resolve('you will be a Software Engineer')
    }else{
        reject('you will be a Software Engineer Assistant')
    }
} )

let waelPromise = new Promise((resolve, reject)=>{
    if(stop1year){
        resolve(true)
    }else{
        reject(false)
    }
})


softPromise.then(messege =>{
    waelPromise.then(()=>{
        console.log('you stoped one yearso you are an assistant now!')
    }).catch(()=>{
        console.log(messege)
    })
   
}).catch(errorMessege =>{
    waelPromise.then(()=>{
        console.log('you stoped one year so you need to study again')
    }).catch(()=>{
        console.log(errorMessege)
  
})
})



async function checkWorker() {
    let messege = await softPromise
    let isStop = await waelPromise
    console.log(messege)
    console.log(isStop)
}
checkWorker()