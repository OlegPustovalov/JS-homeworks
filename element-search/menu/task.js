let m=0
let n=0

fb = function() {
    console.log("прошел клик о Компании") 
    let k = s[m].closest("ul")
    k.classList.toggle("menu_active")
    return false  // запрещение перехода по ссылке в ф-ии обработчике 
}

fc = function() {
    console.log("прошел клик Услуги") 
    let k = s[n].closest("ul")
    k.classList.toggle("menu_active")
    return false  // запрещение перехода по ссылке в ф-ии обработчике 
}

//зарегистрируйте обработчики события click на элементах с классом menu__link
let s = document.querySelectorAll (".menu__link")

for (let i=0; i < s.length;i++){
    if (s[i].textContent == "О компании"){
        s[i].onclick = fb
        m=i+1
    } 

    if (s[i].textContent == "Услуги"){
        s[i].onclick = fc
        n=i+1
    } 
}