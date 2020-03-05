
function norrisJoke(cb) {  

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
xhr.send();
xhr.onload = function(){
    if (xhr.status == 200){
        let joke = JSON.parse(xhr.response)
        cb(joke.value)
      // OR   
      //  cb(JSON.parse(xhr.response).value) // in one line
    }   
}
}

norrisJoke(callBackFun)
function callBackFun(toPrint) {
    console.log(toPrint)
}