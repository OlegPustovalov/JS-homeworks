const fNext = function() {
        let indexActive=arraySliders.findIndex(arraySliders => arraySliders.classList.contains('slider__item_active') == true)
        arraySliders[indexActive].classList.toggle("slider__item_active")
        if (indexActive+1 == arraySliders.length){
            arraySliders[0].classList.toggle("slider__item_active")
        } else {
            arraySliders[indexActive+1].classList.toggle("slider__item_active")
        }
}

const fPrev = function() {
        let indexActive=arraySliders.findIndex(arraySliders => arraySliders.classList.contains('slider__item_active') == true)
        arraySliders[indexActive].classList.toggle("slider__item_active")
        if (indexActive-1 <0){
            arraySliders[arraySliders.length-1].classList.toggle("slider__item_active")
        } else {
            arraySliders[indexActive-1].classList.toggle("slider__item_active")
        }
}

let sliders = document.getElementsByClassName("slider__item")
let arraySliders = Array.from(sliders)

let arrayNext = document.getElementsByClassName("slider__arrow_next")
let arrayPrev = document.getElementsByClassName("slider__arrow_prev")
arrayNext[0].onclick = fNext
arrayPrev[0].onclick = fPrev