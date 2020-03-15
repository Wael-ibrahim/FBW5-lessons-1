window.onload = ()=>{
    let ball = document.querySelector('#ball')

    
    let i = 0
let direction = true
setInterval(()=>{
    if(direction){
        i++
    }else{
        i--
    }
    if(i == 180){
        direction = false
    }
    if(i == 0){
        direction = true
    }
    
    ball.style.top = i + 'px'
},1) 

}
