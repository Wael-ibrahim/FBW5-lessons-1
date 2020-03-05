

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.chucknorris.io/jokes/random')
xhr.send();
xhr.onload = function(){
    if(xhr.status == 200){
       // console.log(xhr.response)
       let joke =JSON.parse(xhr.response) 
       document.write('<img src="'+joke.icon_url+'">' + '<br>')
       document.write(joke.id + '<br>')
       document.write(joke.value)
       
       
     }else{
         console.log('error number is : ' + xhr.status)
     }
}







///////////////////////the Second Example////////////////////

/*
setTimeout(() =>{ 

let xhr = new XMLHttpRequest();

xhr.open('GET', '/data.json');
    xhr.send();
    let d = new Date();
        console.log(d.getMilliseconds())
    xhr.onload = function (){
        let d = new Date();
        console.log(d.getMilliseconds())
        // console.log(xhr.status)
        // console.log(xhr.response)
        if (xhr.status == 200) {   // response number 200 is ok, 404 is page not found
            console.log('All good')
            console.log(xhr.response) // data coming back from the server
        }else{
            console.log(xhr.statusText)
            console.log('Error Number : ' + xhr.status)
        }
    }
},1000);

*/