const inputText = document.querySelector("textarea")
inputText.value=localStorage.getItem('input') //если в localStorage  нет ключа input, то результат равен null
inputText.addEventListener('input',()=>{
    localStorage.setItem('input',inputText.value)
})