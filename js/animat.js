/*Animate de fade in sus pe pagina subdiviziuni*/

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2 
    });

    const elements = document.querySelectorAll(".first-text");
    elements.forEach(element => {
        observer.observe(element);
    });
});

/*animatie cre*/
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2 
    });

    const elements = document.querySelectorAll(".person-container");
    elements.forEach(element => {
        observer.observe(element);
    });
});




/*animatie contacte*/
    document.addEventListener("DOMContentLoaded", function() {
        const animatedElements = document.querySelectorAll('.animate');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.2 
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    });

