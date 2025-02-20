
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");


    const updateCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        const increment = target / 200;

        const count = () => {
            const current = +counter.innerText; 

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(count, 10); 
            } else {
                counter.innerText = target;
            }
        };

        count();
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    updateCounter(counter);
                    observer.unobserve(counter); 
                }
            });
        },
        {
            threshold: 0.5, 
        }
    );


    counters.forEach((counter) => {
        observer.observe(counter);
    });
});
