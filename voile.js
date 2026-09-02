flecheRight=document.querySelector('.fleche')
voileImg=document.querySelector('.voile')
const images = [
    "img/voile.webp",
    "img/voile2.png",
    "img/voile3.png"
]

let index = 0

flecheRight.addEventListener("click", () => {
    index = (index + 1) % images.length  // revient à 0 après la dernière image
    voileImg.src = images[index]
   voileImg.classList.toggle("img-change")
})