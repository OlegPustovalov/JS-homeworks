const p = document.getElementById("timer")
var seconds = setInterval(function () {
    p.textContent=Number(p.textContent)-1
    if (p.textContent == 0){
        alert("Вы победили в конкурсе!")
        clearInterval(seconds)
    }
},1000)     