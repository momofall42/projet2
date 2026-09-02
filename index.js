const nav=document.querySelector(".header-foot")
flecheRight=document.querySelector('.fleche')
voileImg=document.querySelector('.voile')
const images = [
    "img/voile.webp",
    "img/voile2.png",
    "img/voile3.png",
    "img/voile4.png",
    "img/voile5.png",
    "img/voile6.png",
]

let index = 0

flecheRight.addEventListener("click", () => {
    index = (index + 1) % images.length  // revient à 0 après la dernière image
    voileImg.src = images[index]
   voileImg.classList.toggle("img-change")
})
window.addEventListener('scroll',()=>{
    if(window.scrollY>48){
        nav.classList.add("scrollnav")
    }
    else{
        nav.classList.remove("scrollnav")
    }
})
