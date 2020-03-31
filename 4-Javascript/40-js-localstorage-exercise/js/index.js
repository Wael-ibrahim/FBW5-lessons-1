window.onload = function(){
    let coursesList = document.querySelector('#coursesList')
    let studentGradeInp = document.querySelector('#studentGradeInp')
    let addGradeBtn = document.querySelector('#addGradeBtn')
    let gradeListElement = document.querySelector('#gradeListElement')

    addGradeBtn.addEventListener('click', function(e){
       let selectedCourse = coursesList.options[coursesList.selectedIndex].value
        let gread = studentGradeInp.value 
        if(selectedCourse !== '' && gread.trim() !== ''){
            let listItem = document.createElement('li')
            listItem.innerText = selectedCourse + ': ' + gread + '%'
            gradeListElement.append(listItem)
            studentGradeInp.value =  ''
        } 

    })
}
   