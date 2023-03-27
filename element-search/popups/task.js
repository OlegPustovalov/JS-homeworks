//Всплывающие окна

let p = document.getElementById("modal_main")
let s = document.getElementById("modal_success")
let t = document.getElementsByClassName("show-success")
let r = document.getElementsByClassName("modal__close")

fa = function(){
    p.classList.toggle("modal_active")//удаляем класс modal_active
    s.classList.toggle("modal_active")//добавляем класс modal_active
}

fb = function(){
    p.classList.toggle("modal_active")//удаляем класс modal_active из modal_main
}

fc = function(){
    s.classList.toggle("modal_active")//удаляем класс modal_active из modal_success
}


p.classList.toggle("modal_active") //добавляем класс modal_active в modal_main

t[0].onclick = fa
r[0].onclick = fb
r[2].onclick = fc           
    
