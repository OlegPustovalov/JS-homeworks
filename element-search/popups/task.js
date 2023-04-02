//Всплывающие окна
const fOpenModalSuccess = function(){
    let modalSuccess = document.getElementById("modal_success")
    modalSuccess.classList.toggle("modal_active")
}
const fCloseWindow = function(e){
    let delClass = e.target.closest(".modal_active")
    delClass.classList.toggle("modal_active")
}
//показываем окно #modal_main
let startWindow = document.getElementById("modal_main")
startWindow.classList.toggle("modal_active") //добавляем класс modal_active в modal_main

//ставим обработчик на крестики
let arrayX = document.getElementsByClassName("modal__close")
for (let i=0;i<arrayX.length;i++){
    arrayX[i].onclick = fCloseWindow
}

//ставим обработчик на открытие окна #modal_success
let arrayShowSuccess = document.getElementsByClassName("show-success")
arrayShowSuccess[0].addEventListener('click',fOpenModalSuccess) 