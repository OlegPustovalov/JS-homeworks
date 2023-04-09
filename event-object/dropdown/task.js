const fMainElement = function(){
    let element= this.nextElementSibling
    element.classList.toggle("dropdown__list_active")
    return false
} 

const fClickMenu = function(){
    let closeActivElement = document.querySelector(".dropdown__list_active")
    closeActivElement.classList.toggle("dropdown__list_active")
    let divElement = document.querySelector(".dropdown__value")
    divElement.textContent=this.textContent
    return  false
}

let mainElement = document.querySelector(".dropdown__value")
mainElement.addEventListener('click',fMainElement)

let elementOfList = document.querySelectorAll (".dropdown__link")
for (let i=0; i < elementOfList.length;i++){  
    elementOfList[i].onclick=fClickMenu
}