// window.onload = function (){
//     // assign an event to add button
    
//     let input = document.querySelector('#todoInput')
//     let todoAddBtn = document.querySelector('#todoAddBtn')
//     let ol = document.querySelector('#todoList')

//     todoAddBtn.addEventListener('click', function(){

//         // create li element
//         let li = document.createElement('li') 
//         
//         // put something inside li 
//         li.innerText = input.value
//         ol.append(li)
//         //clear input value
//         input.value = ""

//     })
// }

window.onload = function () {
    // get html elements
    let todoInput = document.querySelector('#todoInput')
    let addBtn = document.querySelector('#todoAddBtn')
    let todoList = document.querySelector('#todoList')
    // add click event listener to add btn
    let toDoArray = []
    addBtn.addEventListener('click', function (e) {
        let todoValue = todoInput.value
        if(todoValue.trim() != ""){
            let listItem = document.createElement('li')
            listItem.innerText = todoValue
            todoList.append(listItem)
            // add the list to localstorage
            toDoArray.push(todoValue)
            let todoArrayJson = JSON.stringify(toDoArray)
            localStorage.setItem('todolist', todoArrayJson)
            
        } else {
            alert('todo value is empty, please enter a a todo value')
        }
        todoInput.value = ''
      })

      // read local storage
      let jsonObj = localStorage.getItem('todolist')
      // check if there is datat with thr key todolist in the local storage
      if(jsonObj != null ){
          let convertedArr = this.JSON.parse(jsonObj)
          convertedArr.forEach(element => {
              toDoArray.push(element)

              let listItem = document.createElement('li')
              listItem.innerText = element
              todoList.append(listItem)
          });
          
          
      }
  }