let x = new Date()
document.write(typeof(x) + '<br>')
document.write(x + '<br>')

let y = new Date(1989,2,12,12,12,12)
document.write(y.getFullYear() + '<br>')  //return Year
document.write(y.getMonth() + '<br>')     //return Month  0 - 11
document.write(y.getDate() + '<br>')      //return Day    0 - 30
document.write(y.getDay() + '<br>')       //return the order of weekday 0-6
document.write(Date.now() + '<br>')       //return the number of milliseconds since 1970

let date1 = new Date( '12.03.1988 17:30:00')
let date2 =  Date.now()
document.write((date2 - date1) /1000/60/60/24/365 +'<br>')


