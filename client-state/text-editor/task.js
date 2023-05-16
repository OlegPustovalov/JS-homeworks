const inputText = document.querySelector("textarea")
if (localStorage.getItem('input')){
    inputText.value=localStorage.getItem('input')
}
inputText.addEventListener('input',()=>{
    localStorage.setItem('input',inputText.value)
})