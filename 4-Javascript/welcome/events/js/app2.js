
// first Event is onload window

let obj ={
    title: 't',
    name: 'wael'
}
//console.log(document.body)

//////////////////////////


window.onload = function(){
    //anything you put it here it willexcuted after the all document is loaded
    printBody();
}


function printBody() {
    console.log(document.body)
}

//////////////////////////////

// THhe second important Event Click

function clickEventHandlerMostafa() {
    alert ("Done")
    console.log("done again")
}

// THhe third important Event Click
function doubleClick() {
    alert ("Done 2")
    console.log("done again")
}


//the forth important Event mouse over
function mouseOver() {
    console.log('mouse over')
}

function change() {
    console.log("changed!")
}

function keypress(arg) {
    console.log(arg.value)
}