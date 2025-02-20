document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".people-photo img");

    const observerOptions = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    images.forEach(image => observer.observe(image));
});