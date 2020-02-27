let person = {
    //property string
    firstName: 'Wael',
    lastName: 'Ibrahim',
    //property number
    birthyear: 1988,
    job: 'Trainer',
    //property boolean
    married: true,
    // method
    name : function(){
        return this.firstName + ' ' + this.lastName 
    },
    age : function (){
        x = new Date().getFullYear()
        return x - this.birthyear
    },
    
    // property array
    kids: ['Qeis', 'Ilyas'],
    // property object
    wife:{
        firstName : 'Nivin',
        lastName: 'Ibrahim',
        age:NaN,
        job:'sozialbäda',
        name : function(){
            return this.firstName + ' ' + this.lastName
        }
       
    }, 
    // property array of objects
    brothers:[{
        firstName : 'Osama',
        lastName : 'Ebrahim'
    },{
        firstName : 'Bilal',
        lastName : 'Abd Alhafiz'
    }]
    
}


document .write(person.kids[0] + '<br>')
document.write(person.age() + '<br>')
document.write(person.brothers[1].lastName + '<br>')