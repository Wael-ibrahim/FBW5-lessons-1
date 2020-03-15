function sayHello(cb){
    setTimeout(()=>{
        console.log('Hello')
        cb()
    },1000)
}

sayHello(()=>{
    console.log('World')
})



////////////////////////////////

function someFun(word, cb) {
    cb()
    console.log(word)
}

someFun('hi', ()=>{
    console.log('I am a call back function')
})