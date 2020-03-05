let xhr = new XMLHttpRequest();
xhr.open('GET', '/data.json');
xhr.send();

xhr.onload = function(){
    if(xhr.status == 200){
        let products = JSON.parse(xhr.response).arrayOfProducts
        for (let i = 0; i < products.length; i++) {
            let productHTML = (i + 1)+ ' <img src="'+products[i].imgUrl+'"width="70" >'
            productHTML +=' '+products[i].name;
            productHTML +='<sub><del>  '+ (products[i].price * 2) + 'Euro</del></sub>';
            productHTML +='<b>  '+ products[i].price  + 'Euro</b><br>';
            document.write(productHTML)
            
        }
        document.close()  // the page it will be not loading




        // products.forEach(product => {
        //     let productHTML = '<img src="'+product.imgUrl+'"width="70" >'
        //     productHTML +='<br>  '+product.name;
        //     productHTML +='<sub><del>  '+ (product.price * 2) + 'Euro</del></sub>';
        //     productHTML +='<b>  '+ product.price  + 'Euro</b><br>';
        //     document.write(productHTML)
        // });
    }
}