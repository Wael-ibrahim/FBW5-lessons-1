    // this is long way 

let wael = {
    firstName : 'Wael',
    lastName : 'Ibrahim',
    fulName : function () {
        return this.firstName + ' ' + this.lastName
    },
    travel : true
}

let belal = {
    firstName : 'Belal',
    lastName : 'Sukari',
    fulName : function () {
        return this.firstName + ' ' + this.lastName
    },
    hair : false
}

let bashar = {
    firstName : 'Bashar',
    lastName : 'Ismail',
    fulName : function () {
        return this.firstName + ' ' + this.lastName
    }
}

document.write(wael.fulName() + '<br>')
document.write(belal.fulName() + '<br>')
document.write(bashar.fulName() + '<br>')


let parArr = [wael, belal, bashar]
function firstNamePrinter(arr) {
    let storage = ''
    arr.forEach(item => {
        storage += item.firstName + ' ' +  item.travel +'<br>'
    })
    return storage
}
document.write(firstNamePrinter(parArr))