window.onload = function(){
    let input = document.createElement('input');
    input.className= 'input'
    //input.id = 'inputId'
    input.setAttribute('id', 'inputId')
    input.setAttribute('style', 'border-radius:10px')
    console.log(input.getAttribute('class'))
    // add direct 
    document.body.append(input)

//    //add inside an existing element
//    let target = document.getElementById('target')
//    target.appendChild(input)

//    let inputButton = document.createElement('input')
//    inputButton.setAttribute('type', 'button')

//    //inputButton.setAttribute('value', 'Add')
//    inputButton.value = 'Add'

//    document.body.appendChild(inputButton)
//    inputButton.addEventListener('click', addElement)
//     // Action 
let h2 = document.createElement('h2')
h2.id = 'res'
document.body.appendChild(h2)
input.addEventListener('keyup', type)
    
}

function addElement() {
    let input1 = document.createElement('input')
    input1.className = 'input'
    document.body.appendChild(input1)
}
function type(e){
    let h2 = document.getElementById('res')
    if(e.keyCode === 13){  // 13 = Enter
        h2.style.backgroundColor = 'red'
    }
    if(e.keyCode === 16){  // 16 = shift
        h2.style.color = 'yellow'
    }
    h2.addEventListener('click', function(ev){
        console.log(ev.target.innerText)
    })
    let val = e.target.value 
    //e.target = input
    h2.innerText = val
    console.log(e.keyCode)
}