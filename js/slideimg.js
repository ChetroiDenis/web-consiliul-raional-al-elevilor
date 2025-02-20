document.querySelectorAll('.slideshow').forEach(slideshow => {
    const slides = slideshow.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    let currentIndex = 0;
    const totalSlides = images.length;

    function updateSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(updateSlide, 3000);
});