const fClickMenu = function() {
    let element= this.nextElementSibling //поиск соседнего элемента выбранного
    if (element != null){
        if (element.classList.contains('menu_sub') == true){
            element.classList.toggle("menu_active")
            return false  //запрещение перехода по ссылке в ф-ии обработчике 
        }
    }
}

//зарегистрируйте обработчики события click на элементах с классом menu__link
let s = document.querySelectorAll (".menu__link")
for (let i=0; i < s.length;i++){
    s[i].onclick = fClickMenu
}
