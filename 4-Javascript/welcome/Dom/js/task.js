
function wael() {
    

    let para = document.getElementsByTagName('p')
    let  num = 0
    for(let element of para){
        num = num +1
        element.innerText = num + '- paragraph'
        
    }
}  


