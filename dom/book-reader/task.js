const fClickMenu = function(){
    //удаляем font-size_active из прошлого активного a.font-size
    let indexActive=arrayFontSize.findIndex(arrayFontSize => arrayFontSize.classList.contains('font-size_active') == true)
    arrayFontSize[indexActive].classList.toggle('font-size_active')

    // добавляем активный класс в выбранном размере a.font-size
    this.classList.toggle('font-size_active') 
    
    //удаляем из div#book если есть классы book_fs-small  и book_fs-big
    let divBook = document.getElementById ('book')
    if (divBook.classList.contains('book_fs-small') == true){
        divBook.classList.toggle('book_fs-small')
    }
    if (divBook.classList.contains('book_fs-big') == true){
        divBook.classList.toggle('book_fs-big')
    }
    
    // добавляем  класс выбранного font-size в div#book
    if (this.dataset.size=='small'){   
        divBook.classList.add('book_fs-small')  
    }else if (this.dataset.size=='big'){
        divBook.classList.add('book_fs-big')    
    }
    return false //для отмены действий браузера по умолчанию
}


let fontS = document.querySelectorAll (".font-size")
let arrayFontSize = Array.from(fontS)
for (let i=0; i < arrayFontSize.length;i++){  
    arrayFontSize[i].onclick=fClickMenu
}