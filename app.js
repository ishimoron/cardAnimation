const slides = document.querySelectorAll('.slide')

for(const slide of slides) {
    slide.addEventListener('click', () => {
        clearSlides()
        slide.classList.add('active')
    })
}

function clearSlides(){
    slides.forEach(slide => {
        slide.classList.remove('active')
    });

}

