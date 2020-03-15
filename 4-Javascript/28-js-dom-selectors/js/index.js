window.onload = ()=>{
  let elements =  document.getElementsByClassName('card-head')
  console.log(elements.length);

  let h3 = document.getElementsByTagName('h3')
  console.log(h3)

  // querySelector get the first element in the document 
  let elm = document.querySelector(".card-content")
  console.log(elm)

  let elms = document.querySelectorAll('.contact-container li')
  console.log(elms)

  blaSelector('.social a')
  console.log(blaSelector('.social a'))
}

function blaSelector(selectorText){
    return document.querySelectorAll(selectorText)
}