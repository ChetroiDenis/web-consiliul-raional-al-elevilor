function openNav() {
    document.getElementById("sidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
  }
  

  function animateLogo() {
    let logoAnim = document.querySelectorAll('.logo-animation');
    logoAnim.forEach((anim, index) => {
        anim.style.animation = index % 2 === 0 ? "rotateLines1 1s linear" : "rotateLines2 1.2s linear";
    });
    
    // Elimină animația după 2 secunde pentru a permite reîncărcarea
    setTimeout(() => {
        logoAnim.forEach(anim => {
            anim.style.animation = "";
        });
    }, 500);
}

window.onload = function() {
    animateLogo();
};
