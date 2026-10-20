// Rendi le funzioni globali
window.toggleMenu = function() {
    const menu = document.querySelector('.menu-container');
    const overlay = document.querySelector('.overlay');
    const hamburger = document.querySelector('.hamburger');
    const body = document.body;
    
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
    body.classList.toggle('menu-open');
}

window.toggleSubmenu = function(header) {
    const submenu = header.nextElementSibling;
    const isActive = submenu.classList.contains('active');
    
    // Chiudi tutti i submenu
    document.querySelectorAll('.submenu').forEach(sub => {
        sub.classList.remove('active');
    });
    document.querySelectorAll('.menu-header').forEach(h => {
        h.classList.remove('active');
    });
    
    // Apri il submenu cliccato se non era già aperto
    if (!isActive) {
        submenu.classList.add('active');
        header.classList.add('active');
    }
}

// Previene lo scroll della pagina quando si scrolla il menu
document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.querySelector('.menu-container');
    if (menuContainer) {
        menuContainer.addEventListener('touchmove', function(e) {
            e.stopPropagation();
        }, { passive: true });
    }
});