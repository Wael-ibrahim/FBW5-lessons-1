window.onload = ()=>{
    let container = document.querySelector('#container')
    container.addEventListener('click', function(e){
        let ballDiv = document.createElement('div')
        ballDiv.classList.add('ball')
       // ballDiv.setAttribute('class', 'ball')
       ballDiv.style.left = e.clientX -5 + 'px'
       ballDiv.style.top = e.clientY -5 + 'px'
       container.append(ballDiv)
       throwTheBall(ballDiv,e.clientY -5,e.clientX -5)
       
    })
}

function throwTheBall(ball, y, x, parentHight, ballHight){
    ball.style.left = x
    let down = true
    let counter = y
    setInterval(() => {
        ball.style.top = counter+ 'px';
        if(down){
            counter++;
        } else {
            counter--;
        }
        if(counter == parentHight - ballHight ){
            down = false
        }
        if(counter == 0){
            down = true
        }
    }, 1);
}
