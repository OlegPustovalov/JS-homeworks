let i = 0

fa = function() {
    console.log("прошел клик на Главная") 
    return false // запрещение перехода по ссылке в ф-ии обработчике   
}

fb = function() {
    console.log("прошел клик о Компании") 
    let k = s[2].closest("ul")
    k.classList.toggle("menu_active")
    return false  
}

fc = function() {
    console.log("прошел клик Услуги") 
    let k = s[6].closest("ul")
    k.classList.toggle("menu_active")
    return false  
}

fe = function() {
    console.log("прошел клик Контакты")   
    return false
}

//зарегистрируйте обработчики события click на элементах с классом menu__link
let s = document.querySelectorAll (".menu__link")

console.log(s.length)


s[0].onclick = fa //клик на Главная
s[1].onclick = fb //клик о Компании
s[5].onclick = fc //клик Услуги
s[8].onclick = fe //клик Контакты


/*for (i=0; i < s.length;i++){
    s[i].onclick = fa 
}*/

