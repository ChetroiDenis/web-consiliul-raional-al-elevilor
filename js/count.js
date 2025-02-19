    // animatie
    function animateCounter(counter) {
        const target = +counter.getAttribute("data-target");
        const speed = 50; // viteza
        let current = 0;
      
        const increment = Math.ceil(target / speed);
      
        function updateCounter() {
          current += increment;
          if (current >= target) {
            counter.textContent = target; // stop
          } else {
            counter.textContent = current;
            requestAnimationFrame(updateCounter);
          }
        }
      
        updateCounter();
      }
      

      function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      

      const counters = document.querySelectorAll(".counter");
      let countersStarted = false;
      
      window.addEventListener("scroll", () => {
        if (!countersStarted) {
          const container = document.querySelector(".container-num");
          if (isInViewport(container)) {
            counters.forEach(counter => animateCounter(counter));
            countersStarted = true; 
          }
        }
      });
      
// Funcția care verifică dacă secțiunea este vizibilă pe ecran
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

