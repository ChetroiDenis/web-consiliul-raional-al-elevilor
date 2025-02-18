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
    
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        inviteContainer.classList.add('visible'); // Adaugă clasa pentru animație
    }
}

// Adaugă un event listener pentru a verifica vizibilitatea atunci când se face scroll
window.addEventListener('scroll', checkVisibility);

// Verifică vizibilitatea imediat ce pagina este încărcată
document.addEventListener('DOMContentLoaded', checkVisibility);


