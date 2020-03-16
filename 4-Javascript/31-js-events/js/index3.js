window.onload = ()=>{
    link = document.querySelector('#someLink')
    link.addEventListener('click',function(e){
        e.preventDefault()
            console.log('Hello World')
            
        })
        let mainDiv = document.querySelector('#mainDiv')
        let subDiv = document.querySelector('#subDiv')

        mainDiv.addEventListener('click', function(){
            console.log('hey I am main div' + this.id)
        })

        subDiv.addEventListener('click', function(e){
            e.stopPropagation()
            console.log('hey I am sub div')
        })
    
}