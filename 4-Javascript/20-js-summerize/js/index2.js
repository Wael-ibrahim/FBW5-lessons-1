class Somclass {
    constructor (num){
        this.prop1 = {}
        this.prop2 = num
    }
}

let father = new Somclass(60);
father.prop1 = new Somclass(50);
father.prop1.prop1 = new Somclass(40);
father.prop1.prop1.prop1 = new Somclass(30);
father.prop1.prop1.prop1.prop1 = new Somclass(20);
father.prop1.prop1.prop1.prop1.prop1 = new Somclass(10);
father.prop1.prop1.prop1.prop1.prop1.prop1 = 0;

//console.log(father)
//document.write(father.prop2)

function objectParser(obj) {
    if(obj != 0){  
    console.log(obj.prop2)
    objectParser(obj.prop1)
}
}
objectParser(father)