let fClickMenu=function(e){
    //делаем неактивным предыдущий выделенный таб и убираем его контент
    let tabElement = document.querySelector(".tab_active")
    if (tabElement != null){
        tabElement.classList.toggle("tab_active")  
    }
    let contElement = document.querySelector(".tab__content_active")
    if (contElement != null){
        contElement.classList.toggle("tab__content_active")
    }
    //выделяем выбранный таб
    this.classList.toggle("tab_active")

    //находим индекс выбранного таба
    let tabs = document.querySelectorAll (".tab")
    let arrayElements = Array.from(tabs)
    let indexActive=arrayElements.findIndex(arrayElements => arrayElements.classList.contains('tab_active') == true)

    //делаем видимым контент выбранного таба
    let contents = document.querySelectorAll (".tab__content")
    contents[indexActive].classList.toggle("tab__content_active")
}

let listOfTabs = document.querySelectorAll (".tab")
//назначаем обработчик на каждый таб
for (let i=0; i < listOfTabs.length;i++){  
    listOfTabs[i].onclick=fClickMenu
}