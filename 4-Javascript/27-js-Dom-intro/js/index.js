window.onload = function (){
    let obj = document.getElementById('div1')
console.log(obj)
obj.innerHTML = '<span style="font-size:70px">FBW1</span>'



let fbwdiv = document.getElementById('fbwdiv')
    for (let i = 100; i > 0; i--) {
   
        fbwdiv.innerHTML+='<span style="font-size: '+i+'px">FBW5</span><br>'
    }

}