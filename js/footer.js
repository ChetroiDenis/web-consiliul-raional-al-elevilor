        // Crează un observator pentru a urmări când footer-ul devine vizibil pe ecran
        const footer = document.querySelector('footer');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.classList.add('visible'); // Adaugă clasa pentru animație
                    observer.unobserve(entry.target); // Oprește observarea după ce a devenit vizibil
                }
            });
        }, { threshold: 0.5 }); // 50% din footer trebuie să fie vizibil

        observer.observe(footer); // Începe să observe footer-ul
