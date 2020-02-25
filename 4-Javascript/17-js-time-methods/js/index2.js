let i = 0
// while (i < 10) {
//     console.log( i )
//     i++
// }

let blaInterval = setInterval(() => {
    document.write( i + '<br>' )
    
    if (i == 100){
        clearInterval(blaInterval)
    }
    i++
}, 30);