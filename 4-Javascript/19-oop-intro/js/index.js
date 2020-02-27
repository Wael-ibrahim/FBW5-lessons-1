let x = {}
document.write(typeof(x) + '<br>')

x.bla = 1212
x.blabla = 'Wael'
x.mul = function(num){
    return this.bla * num
}
document.write(x.mul(2) + '<br>')

let y = {...x}  // y is a copy of x wen we change y  x will not change
y.bla = 1515
document.write(y.mul(2) + '<br>')


document.write( '<br><br>')

///////////////the  seconde Example///////////////

let teacher = {}

teacher.name = 'Wael'
teacher.lastName = 'Ibrahim'
teacher.fullName = function(){
    return this.name + ' ' + this.lastName
}
let participant = {...teacher}
participant.name = 'Ahmad'
participant.lastName = ' Osman'

document.write(teacher.fullName() + '<br>')
document.write(participant.fullName() + '<br>')