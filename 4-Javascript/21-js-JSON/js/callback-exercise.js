function funWithDelay(cb, num) {
    setTimeout(()=>{
        cb (num * 2)
    },2000)
}




funWithDelay(callBackFun, 5)
function callBackFun(toPrint) {
    console.log(toPrint)
}