
function wh(){ 
let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Hello")
    },1000)

    
});
return promise
}

wh().then(function(v){
    console.log(v)
    console.log("world")
})

/////////////////////////////////////

function wh1(value, ccc){
setTimeout(function(){
    ccc(value)
},1000)
}

wh1("hello", wael)

function wael(whatever){
    console.log(whatever)
}

