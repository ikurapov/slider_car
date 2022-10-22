function slidesPlugin(activeSlides = 0) {
    const slides = document.querySelectorAll('.slide')

<<<<<<< HEAD
    slides[activeSlides].classList.add('active')
    
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActive()
            
            slide.classList.add('active')
        })
    }
    function clearActive() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(3)
=======
for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActive()
        slide.classList.add('active')
    })
}
function clearActive() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
>>>>>>> 69ffcb0b4e723c1482c1b1147d8fb35e4e8401df
