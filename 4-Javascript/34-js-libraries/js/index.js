window.onload = function(){
    // my data that should be shown in the table
    // tutorial link is https://www.cssscript.com/dynamic-data-table-vanilla-javascript/
    let myData = {
        "headings" : ['product name', 'product price', 'quantity', 'total'],
        "data" : [
            ['keyboard', '5', '10', '50 EUR'],
            ['mouse','5','10','50 EUR'],
            ['screen', '50', '10','500 EUR']
        ]
}

let theTable = document.querySelector('#blaTable')
let mydataTable = new DataTable(theTable, {
    data: myData,
    nextPrev: true,
});


let productNameInput = document.querySelector('#productNameInput')
let productPriceInput = document.querySelector('#productPriceInput')
let quantityInput = document.querySelector('#quantityInput')
    document.querySelector('#addRowbtn').addEventListener('click', function(e){
        // Add New Row
      //  mydataTable.rows().add(['headset', '10', '15', '150 EUR']);

      let totalPrice = parseFloat(productPriceInput.value) * parseFloat(quantityInput.value) + ' EUR'
      mydataTable.rows().add([productNameInput.value, productPriceInput.value, quantityInput.value, totalPrice ]);
      productNameInput.value = ''
      productPriceInput.value = ''
      quantityInput.value = ''
    })

       
}