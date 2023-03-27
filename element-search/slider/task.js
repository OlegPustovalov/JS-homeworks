let s = document.getElementsByClassName("slider__item")
let t = document.getElementsByClassName("slider__arrow_next")
let r = document.getElementsByClassName("slider__arrow_prev")
let index = 0

fa = function() {
    if (index == 4) {
        index = 0
        s[4].classList.toggle("slider__item_active")
        s[0].classList.toggle("slider__item_active")
    } else {
        s[index].classList.toggle("slider__item_active")
        s[index+1].classList.toggle("slider__item_active")
        index+=1 
    }     
}

fb = function() {
    if (index == 0) {
        index = 4
        s[0].classList.toggle("slider__item_active")
        s[4].classList.toggle("slider__item_active")
    } else {
        s[index].classList.toggle("slider__item_active")
        s[index-1].classList.toggle("slider__item_active")
        index=index-1
    }   
}

r[0].onclick = fb
t[0].onclick = fa
