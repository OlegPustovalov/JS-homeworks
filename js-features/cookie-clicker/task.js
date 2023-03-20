const img = document.getElementById("cookie")
const p = document.getElementById("clicker__counter")
img.onclick=() =>{         
    setTimeout(() => {
        img.width+=10
        img.height+=10
    }, "1000")  
    p.textContent=Number(p.textContent)+1
    setTimeout(() => {
        img.width-=10
        img.height-=10
    }, "500")        
} 