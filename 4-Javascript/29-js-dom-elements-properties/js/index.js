window.onload = () =>{

    let div = document.querySelector('#someDiv')
    div.style.backgroundColor = 'red'

    //div.style.height= '50px'
    
    // increase div height unlemited
    // let i = 50
    // setInterval(()=>{
    //     i++
    //     div.style.height= i+'px'
    // },10)


    //increase div height to 100 px then decrease it to 50 and so 
let i = 50
let direction = true
setInterval(()=>{
    if(direction){
        i++
    }else{
        i--
    }
    if(i == 100){
        direction = false
    }
    if(i == 50){
        direction = true
    }
    
    div.style.height = i + 'px'
},10) 
}


