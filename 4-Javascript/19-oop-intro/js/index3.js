class Participant {
    constructor(lastname, firstname){
        this.firstName = firstname
        this.lastName = lastname
    }
    fullName(){
        return this.firstName + ' ' + this.lastName
    }
}
let wael = new Participant('Albash', 'Wael')
wael.travel = true
document.write(wael.fullName() + '<br>')

let safa = new Participant('Bouhlel', 'Safa')
document.write(safa.fullName() + '<br>')

let shirin = new Participant('Valizadeh', 'Shirin')
document.write(shirin.fullName() + '<br>')

document.write( '<br><br>')

////////////////////////////////////


let parArr = [wael, safa, shirin]



            // the first solution
for(let i = 0; i < parArr.length; i++) {
    document.write(parArr[i].firstName +  '<br>')
    
}
document.write( '<br><br>')




            // the seconde solution
parArr.forEach(blaItem=> {
    document.write(blaItem.firstName + '<br>')
})


document.write( '<br><br>')




            // the third solution
function firstNamePrinter(arr) {
    let storage = ''
    arr.forEach(item => {
        storage += item.firstName + ' ' +  item.travel +'<br>'
    })
    return storage
}
document.write(firstNamePrinter(parArr))


document.write( '<br><br>')
// write a function return an array wich contains items 
// where those Items lastnames contains a certin char as a  


// solution hard way 

function hardFunction(arr, chr) {
    let resultArr = []
    arr.forEach(item => {
        if(item.lastName.indexOf(chr) > -1){
            resultArr.push(item)
        }
    })
    return resultArr
}
console.log(hardFunction(parArr, 'a'))


    // solution with easy way
function easyWay(arr, chr) {
    return arr.filter(item => item.lastName.indexOf(chr) > -1)
}

console.log(easyWay(parArr, 'h'))


document.write('///////////////////<br>')

easyWay(parArr,'h').forEach(blaItem => {
    document.write(blaItem.firstName + '<br>')
})