/*pentru header*/
let lastScrollPosition = 0;
const navbar = document.querySelector(".navbar");

// Setează header-ul să fie vizibil inițial
window.addEventListener("load", function () {
    navbar.style.marginTop = "-50px"; // Header-ul să fie complet vizibil
});

window.addEventListener("scroll", function () {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
        // Scroll în jos
        navbar.style.marginTop = "-120px"; // Ascunde header-ul
    } else {
        // Scroll în sus
        navbar.style.marginTop = "-50px"; // Afișează header-ul
    }

    lastScrollPosition = currentScrollPosition;
});

/*afisare animatie cand este vizibil pe ecran (invite-cont...)*/
// Funcția de a verifica dacă elementul este vizibil pe ecran
function checkVisibility() {
    const inviteContainer = document.querySelector('.invite-container');
    const rect = inviteContainer.getBoundingClientRect();
    
    // Verifică dacă div-ul este complet vizibil pe ecran
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        inviteContainer.classList.add('visible'); // Adaugă clasa pentru animația div-ului
        
        // Adaugă o întârziere pentru declanșarea sublinierii, astfel încât să apară după animația de afișare
        setTimeout(() => {
            const h3 = inviteContainer.querySelector('h3');
            h3.classList.add('underline-visible');
        }, 1000); // 1000ms = durata animației de slide-in din CSS
    }
}

// Adaugă un event listener pentru a verifica vizibilitatea atunci când se face scroll
window.addEventListener('scroll', checkVisibility);

// Verifică vizibilitatea imediat ce pagina este încărcată
document.addEventListener('DOMContentLoaded', checkVisibility);

// animatie pentru imagini (click)

        // Selectăm toate imaginile și overlay-ul
        const images = document.querySelectorAll('.photo-container img');
        const overlay = document.getElementById('imageOverlay');
        const overlayImage = overlay.querySelector('img');

        // Când imaginea este apăsată
        images.forEach((img) => {
            img.addEventListener('click', () => {
                overlayImage.src = img.src; // Setăm sursa imaginii în overlay

                // Eliminăm animația (resetare)
                overlayImage.style.animation = 'none';
                setTimeout(() => {
                    // Reaplicăm animația
                    overlayImage.style.animation = 'bounce 0.6s ease';
                }, 0);

                overlay.classList.add('active'); // Activăm overlay-ul
            });
        });

        // Închidere overlay la click pe fundal
        overlay.addEventListener('click', () => {
            overlay.classList.remove('active'); // Dezactivăm overlay-ul
            overlayImage.src = ''; // Resetăm sursa imaginii
        });


// pentru footer

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
