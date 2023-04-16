//Отслеживайте изменение прокрутки окна
//При изменении прокрутки, получите информацию о конкретном положении элемента с классом reveal.
//При нахождении элемента в поле зрения, присвойте этому элементу класс reveal_active

let fscroll = function(){
    let arrayElem = document.querySelectorAll(".reveal")
    let arrayReveal = Array.from(arrayElem)

    for(let i=0; i < arrayReveal.length;i++){ 
        let coords = arrayReveal[i].getBoundingClientRect(); //нахождение координат блока reveal
        if (coords.bottom < 1000 && arrayReveal[i].classList.contains('reveal_active')==false){
            arrayReveal[i].classList.toggle('reveal_active')
        }
    }    
}

window.addEventListener('scroll', fscroll)