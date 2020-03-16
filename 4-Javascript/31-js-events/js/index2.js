window.onload = ()=> {
    let btn = document.querySelector('#someBtn')

    //first way to add event dyanmicly
    // btn.addEventListener('click',function(){
    //     // all commands here will run when you click the button
    //     alert('Hi')
    // })

    //second way to add event dyanmicly
    btn.onclick = function(e){
       if(e.clientY > 15){
           console.log('down')
       }else{
           console.log('up')
       }
    }

    let container = document.querySelector('#container')
    let someInput = document.createElement('input')
    //someInput.type = 'text'
    someInput.setAttribute('type', 'text')
    container.append(someInput)
    someInput.addEventListener('keypress', function(e){
        console.log(e)
    })
}