// the first task

// write js function that recieve div "container" Id as a parameter and create inside this div an text input

// the second task 
//change your previuos function to add the input inside a div and this div suppose to be in the container



function appInit(containerId){
    // get Element by id containerId the parameter
    let appContainer = document.getElementById(containerId)
    // check if this element exist
    if(appContainer){
        let div1 =document.createElement('div')
        // create input
        let inp1 = document.createElement('input')
        // add input inside div
        div1.append(inp1)


        //create colors list
        let colorList =document.createElement('select')
        //create list option
        let colorOpt1 =document.createElement('option')
        //set a value for this option
        colorOpt1.value= ""
        // create innerText for the option
        colorOpt1.innerText = "Choose Color"
        // add colorList inside the list element
        colorList.append(colorOpt1)
        // add colorList inside div1
        div1.append(colorList)
        //create colors options array 
        let colorsArr = ["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"]
        colorsArr.forEach(element => {
            let colorOpt = document.createElement('option')
            colorOpt.value = element
            colorOpt.innerText = element
            colorList.append(colorOpt)
        });

        let orientationList =document.createElement('select')
        let orientationOpt1 = document.createElement('option')
        orientationOpt1.value = ""
        orientationOpt1.innerText = "Choose The Orientation"
        orientationList.append(orientationOpt1)
        div1.append(orientationList)
        let orientationArr = ["all", "horizontal", "vertical"]
        orientationArr.forEach(element => {
            let orientationOpt = document.createElement('option')
            orientationOpt.value = element
            orientationOpt.innerText = element
            orientationList.append(orientationOpt)
        });

        let categoryList =document.createElement('select')
        let categoryOpt1 = document.createElement('option')
        categoryOpt1.value = ''
        categoryOpt1.innerText = "Category "
        categoryList.append(categoryOpt1)
        div1.append(categoryList)
        let categoryArr = ['backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings', 'health', 'people', 'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music']
        categoryArr.forEach(element => {
           let categoryOpt = document.createElement('option')
           categoryOpt.value =element
           categoryOpt.innerText = element
           categoryList.append(categoryOpt)

        });
        // creat min width input
        let minWidthinp = document.createElement('input')
        minWidthinp.type = 'number'
        minWidthinp.min = '0'
        minWidthinp.placeholder = ' min width'
        
        div1.append(minWidthinp)


        // creat min height input
        let minHeightinp = document.createElement('input')
        minHeightinp.type = 'number'
        minHeightinp.min = '0'
        minHeightinp.placeholder = ' min height'
        
        div1.append(minHeightinp)


        //add class 'controls-container' to div1
        div1.classList.add('controls-container')
        // creat a button and add it to div1
        let btn1=document.createElement('button')
        btn1.innerText = 'Search'
        div1.append(btn1)

        // create pagging button container
        let paggingDiv = document.createElement('div')
        div1.append(paggingDiv)
        
        // add div inside the container
        appContainer.append(div1)
        // create and add another div to container
        let div2 =document.createElement('div')
        appContainer.append(div2)
        // add class 'images-container' to div2 
        div2.classList.add('images-container') 
        // create images
        
        // add click event listner to btn1
        btn1.addEventListener('click', function(){
            
            // call getData function
           // div2.innerHTML = '';// => empty the div ... 

            getData(inp1.value, div2, paggingDiv, 1, colorList, orientationList, categoryList, minWidthinp, minHeightinp)
            

            // console.log(getData(inp1.value, div2))// as a promisse
            
            // for (let i = 0; i < 20; i++) {
            //     let img = document.createElement('img')
            //     // here
            //     img.setAttribute('src', './imgs/dummy.png')
            //     div2.append(img)   
            // }
              
        })
        // add class container to appContainer
        appContainer.classList.add('container')
    } else{
        // container not exist
        console.log("Element with Id '" + containerId + "' could not be found")
    }
}

// call the function
// window.onload = function(){
//     appInit('container')
// }
        //Try to read the code alone and think about it, when you have any question just write to me


async function getData(keyword, imagesContainer, paggingContainer, pageNumber, colorListElement,orientationListElement, categoryListElement, minWidthElement, minHeightElement){
    // get the selected value from color  list
    let selectedColor = colorListElement.options[colorListElement.selectedIndex].value
    // declae url colors parameter
    let colorParameter = ''
    // check if there is color selected
    if(selectedColor){
        colorParameter = '&colors=' + selectedColor
    } 

     // get the selected value from orientation  list
    let selectedOrientation = orientationListElement.options[orientationListElement.selectedIndex].value
    let orientPar = ''
    if(selectedOrientation){
        orientPar = '&orientation=' + selectedOrientation
    }

    let selectedCategory = categoryListElement.options[categoryListElement.selectedIndex].value
    let categoryParameter = ''
    if(selectedCategory){
        categoryParameter = '&category=' + selectedCategory
    }
    let minWidthParameter = ''
    if(minWidthElement.value.trim()){
        minWidthParameter = '&min_width=' + minWidthElement.value.trim()
    
    }
    let minHeightParameter = ''
    if(minHeightElement.value.trim()){
        minHeightParameter = '&min_height=' + minHeightElement.value.trim()
    }


    imagesContainer.innerHTML = ''
    // getting data from Api using fetch .. Done
    let response = await fetch('https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q='+keyword + '&page=' + pageNumber + colorParameter + orientPar + categoryParameter + minWidthParameter + minHeightParameter)
    if(response.status == 200){
        let data = await response.json()
        console.log(data.hits)
        let num = data.totalHits / 20
        let btnNumbers = Math.ceil(num)
        console.log()
        //clear paggingContainer content befor add buttons to it 
        paggingContainer.innerHTML = ''
        for (let i = 0; i < btnNumbers; i++) {
           
            let btn2=document.createElement('button')
            btn2.innerHTML = i+1
            paggingContainer.append(btn2)
            //disable the button if its page is shown
            if(pageNumber == i+1){
                btn2.disabled = true
            }
            // add even click for pagging button 
            btn2.addEventListener('click', function(){
                getData(keyword, imagesContainer, paggingContainer, i+1, colorListElement,orientationListElement,categoryListElement , minWidthElement, minHeightElement)
            })
            
        }
        data.hits.forEach(element => {
            // create img element
            let img =document.createElement('img')
            img.src = element.previewURL
            let imgLink = document.createElement('a')
            imgLink.setAttribute('target', '_blank')
            //set the href for the link
            imgLink.setAttribute('href', element.largeImageURL)
            imgLink.append(img)
            imagesContainer.append(imgLink)
        });
        
        
    }
}


let Fbw5Search = {
    go: function (elementId) {
        appInit(elementId)
    }
}