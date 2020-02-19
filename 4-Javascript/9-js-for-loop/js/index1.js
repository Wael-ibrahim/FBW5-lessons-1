function showBox(num){  
for(let i = 0; i < num; i++){
    for (let x = 0; x < num ; x++) {
        if (i == 0 || x == 0 || x== num -1 || i == num -1 || i == x || i + x == num -1){
            document.write('*')
        }else {
            document.write('&nbsp; ')
        }
    }  
    document.write('<br>')
    }
}
showBox(10)



document.write('<br> <br> ')


for (let i = 0 ; i <= 4 ; i++) {
    if (i==0 || i==4){
        for (let x = 0 ; x <= 4 ; x++){
       document.write('*')
    }
        } else {
             for( let x = 0 ; x <= 4 ; x++){
                if (x == 0 || x == 4){
                    document.write('*')
                }
                else{
                    document.write( "&nbsp; ")
                }
             }
        
    }
    
    document.write('<br>')
}

document.write('<br><br><br><br><br><br><br>')


for (let i = 0 ; i <= 4 ; i++) {
    for (let x = 4 ; x >= i ; x-- ){
        document.write('*')
    }
    document.write('<br>')
}

document.write('<br><br><br><br><br><br><br>')

for (let i = 4 ; i >= 0 ; i--) {
    for (let x = 0 ; x <= 4 ; x++){
        if(x<i){
            document.write("&nbsp;&nbsp;")
        } else{
            document.write('*')
        }
        
    }
    
    document.write('<br>')
}

document.write('<br><br><br><br><br><br><br>')



for (let i = 0; i < 5 ; i++) {
    for (let x = 1 ; x <= 5 ; x++) {
       
        document.write("*")
    }
    document.write("<br>")
}

// for (let i = 0; i < 10 ; i++) {
//     for (let x = 1 ; x <= 10 ; x++) {
       
//         document.write("*<br>")
//     }
//     document.write("/////////////// <br>")
// }

for (let i = 1; i <= 10 ; i++) {
    for (let x = 1 ; x <= 10 ; x++) {

        document.write(i + 'x' + x + '=' + i * x + "<br>")
       // document.write(i * x + "<br>")
    }
    document.write("<br>")
}
for (let i = 0 ; i <= 4 ; i++) {
    for (let x = 0 ; x <= i ; x++ ){
        document.write('*')
    }
    document.write('<br>')
}


