const fRotator = function(){
    let next = 0
    let indexActive=arrRotator.findIndex(arrRotator => arrRotator.classList.contains('rotator__case_active') == true)
    arrRotator[indexActive].classList.toggle("rotator__case_active")
    if (indexActive+1 == arrRotator.length) {
        next = 0
    }else{
        next = indexActive+1
    }
    arrRotator[next].classList.toggle("rotator__case_active")
    arrRotator[next].style.color=arrRotator[next].dataset.color
    }

let Rotators = document.querySelectorAll (".rotator__case")
let arrRotator = Array.from(Rotators)
let timerId = setInterval (fRotator, 1000)