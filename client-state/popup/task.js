const fCloseWindow = function(e){
    let delClass = e.target.closest(".modal_active")
    delClass.classList.toggle("modal_active")
    document.cookie="modal=close"
}

let pairs = document.cookie.split(';')
if (pairs.includes("modal=close")==false){
    //показываем окно #modal_main
    let startWindow = document.getElementById("subscribe-modal")
    startWindow.classList.toggle("modal_active") //добавляем класс modal_active в modal_main
}
//ставим обработчик на крестик
let arrayX = document.getElementsByClassName("modal__close")
arrayX[0].onclick = fCloseWindow
