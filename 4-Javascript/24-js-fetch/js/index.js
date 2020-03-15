//get data using promise call
// let getData = fetch('/data.json')
// getData.then(response =>{
//     if(response.status == 200){
//         let dataPromise = response.json()
//         dataPromise.then(data=>{
//             console.log(data)
//         }).catch(error=>{
//             console.log(error)
//         })
        
//     }else{
//         console.log('there were errors in getting data')
//     }
// }).catch(error =>{
//     console.log(error)
// })

async function getData(){
    let response = await fetch('/data.json')
    let data = await response.json()
    console.log(data)
}
getData()