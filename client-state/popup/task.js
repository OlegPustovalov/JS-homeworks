const fCloseWindow = function(e){
    let delClass = e.target.closest(".modal_active")
    delClass.classList.toggle("modal_active")
    document.cookie="modal=close"
}

let pairs = document.cookie.split(';')
if (pairs.includes("modal=close")){
    console.log("окно закрыто")
}else{
    //показываем окно #modal_main
    let startWindow = document.getElementById("subscribe-modal")
    startWindow.classList.toggle("modal_active") //добавляем класс modal_active в modal_main
}
//ставим обработчик на крестики
let arrayX = document.getElementsByClassName("modal__close")
for (let i=0;i<arrayX.length;i++){
    arrayX[i].onclick = fCloseWindow
}