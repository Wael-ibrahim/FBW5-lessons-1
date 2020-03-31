

let someText = '19b8fhfv.com'
let regex = new RegExp(/^\d\d[a-n]/)
let testResult = regex.test(someText)
console.log(testResult);

let someText1 = '1wA8fhfv.com'
let regex1 = new RegExp(/^\d[a-z][A-Z]\d/)
let testResult1 = regex1.test(someText1)
console.log(testResult1);

let someText2 = '1 A8fhfv.com'
let regex2 = new RegExp(/^\d\s[A-z]\d/)
let testResult2 = regex2.test(someText2)
console.log(testResult2);

let someText3 = '19b8@fhfv.com'
let regex3 = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
let testResult3 = regex3.test(someText3)
console.log(testResult3);

let someText4 = '+4917688469605'
let regex4 = new RegExp(/^((\+49)|(0049))(\s|)((\d{11})|(\d{10}))$/)
let testResult4 = regex4.test(someText4)
console.log(testResult4);






window.onload = function (){
    let inp1 = document.querySelector('#inp1')
    let btn1 = document.querySelector('#btn1')

    btn1.addEventListener('click', function(){

        if(regex4.test(inp1.value)){
            inp1.classList.add('valid')
            inp1.classList.remove('invalid')
        }else{
            inp1.classList.remove('valid')
            inp1.classList.add('invalid')
        }


        let someText5 = 'www.digtalecareerinstute.org'
    let regex5 = new RegExp(/^www.[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)
    let testResult5 = regex5.test(someText5)
    console.log(testResult5);

        if(regex5.test(inp2.value)){
            inp2.classList.add('valid')
            inp2.classList.remove('invalid')
        }else{
            inp2.classList.remove('valid')
            inp2.classList.add('invalid')
        }


    let someText5 = 'www.digtalecareerinstute.org'
    let regex5 = new RegExp(/^www.[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)
    let testResult5 = regex5.test(someText5)
    console.log(testResult5);

        if(regex5.test(inp2.value)){
            inp2.classList.add('valid')
            inp2.classList.remove('invalid')
        }else{
            inp2.classList.remove('valid')
            inp2.classList.add('invalid')
        }
    })
}

