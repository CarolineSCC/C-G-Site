// js/menu.js
function toggleMenu() {
    const menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.style.display === 'block') {
        menuMobile.style.display = 'none';
    } else {
        menuMobile.style.display = 'block';
    }
}

