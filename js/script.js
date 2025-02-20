/*pentru header*/
let lastScrollPosition = 0;
const navbar = document.querySelector(".navbar");
window.addEventListener("load", function () {
    navbar.style.marginTop = "-50px"; 
});


// animatie pentru imagini (click)

        const images = document.querySelectorAll('.photo-container img');
        const overlay = document.getElementById('imageOverlay');
        const overlayImage = overlay.querySelector('img');

        images.forEach((img) => {
            img.addEventListener('click', () => {
                overlayImage.src = img.src; 


                overlayImage.style.animation = 'none';
                setTimeout(() => {

                    overlayImage.style.animation = 'bounce 0.6s ease';
                }, 0);

                overlay.classList.add('active'); 
            });
        });

        overlay.addEventListener('click', () => {
            overlay.classList.remove('active'); 
            overlayImage.src = ''; 
        });

// pentru footer

    
        const footer = document.querySelector('footer');
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.classList.add('visible'); 
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.5 }); 
        observer.observe(footer); 



// pentru titlu

    document.addEventListener("DOMContentLoaded", () => {
        const titles = document.querySelectorAll(".title h1"); 

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                });
            },
            {
                threshold: 0.5, 
            }
        );
        titles.forEach((title) => observer.observe(title));
    });

