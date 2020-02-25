let arr = [2, 9, -2]
try {
    document.write (arr(0) + '<br>')
} catch (error) {
    document.write (error + '<br>')
}finally{
    document.write('I am gonna be show anyway' + '<br>')
}
 

document.write('Hi<br>')

function div(a ,b) {
    if (typeof a == 'string' || typeof b == 'string'){
        let blaErr1 = new Error('inputs can not be string')
        throw (blaErr1)
    }
    if (b == 0){
        let blaErr = new Error('you can not divide by Zero !!')
        throw ( blaErr)
    } else
    {
        return a / b
    }
    
}
try {
    document.write(div(1, 'wael') + '<br>')
} catch (error2) {
    document.write(error2 + '<br>')
}

document.write('Hi2 <br>')