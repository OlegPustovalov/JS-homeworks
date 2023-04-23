let fcheck=function(){
    let activeIndex = arrayCheckbox.indexOf(this) 
    if  (activeIndex==0 || activeIndex==3){
        if  (arrayCheckbox[activeIndex].checked == true){ 
            arrayCheckbox[activeIndex+1].checked = true
            arrayCheckbox[activeIndex+2].checked = true
        }
        if  (arrayCheckbox[activeIndex].checked == false){
            arrayCheckbox[activeIndex+1].checked = false
            arrayCheckbox[activeIndex+2].checked = false
        } 
    }  
}

let checkboxs = document.querySelectorAll ('.interest__check')
let arrayCheckbox = Array.from(checkboxs)

for (let i=0; i<arrayCheckbox.length; i++){
    arrayCheckbox[i].addEventListener('change',fcheck)
}