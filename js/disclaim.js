window.addEventListener('load', function () {
    var disclaimer = document.getElementById('disclaimer');
    var disclaimerMobile = document.getElementById('disclaimer-mobile');
    var closeBtn = document.getElementById('close-btn');
    var closeBtnMobile = document.getElementById('close-btn-mobile');
    disclaimer.style.display = 'block';
    if (window.innerWidth <= 730) {
        disclaimerMobile.style.display = 'block';
    }
    var timeoutId = setTimeout(function () {
        disclaimer.style.display = 'none';
        disclaimerMobile.style.display = 'none';
    }, 15000);
    closeBtn.addEventListener('click', function () {
        clearTimeout(timeoutId); 
        disclaimer.style.display = 'none';
    });
    closeBtnMobile.addEventListener('click', function () {
        clearTimeout(timeoutId); 
        disclaimerMobile.style.display = 'none';
    });
});
