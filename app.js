function cardPlugin(number) {
    const slides = document.querySelectorAll('.slide')

    slides[number].classList.add('active')

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
}

cardPlugin(0)
