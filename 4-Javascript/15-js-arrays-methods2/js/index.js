let fruits = ['apple', 'banana', 'watermelon', 'grape', 'orange', 'cherry']

let blaValue1 = fruits.find(fruit => fruit.indexOf('a') > -1)  // .find it will be find the first (a) and show the index word
document.write(blaValue1 + '<br>')                                      // .filter it will be find all (a) and show all word


let blaValue = fruits.find(fruit => fruit.indexOf('a') == 2)  
document.write(blaValue + '<br>') 


document.write('////////////// <br>')

// (for of) will iterate over array Items
for ( let item of fruits){
    document.write(item + '<br>')
}

document.write('////////////// <br>')
// (for in) will iterate over array indexes
for ( let blaidx in fruits){
    document.write(blaidx +':'+ fruits[blaidx] + '<br>')
}