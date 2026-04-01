document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuColapsable = document.getElementById('navbarText');

    navLinks.forEach((enlace) => {
        enlace.addEventListener('click', () => {
            
            if (menuColapsable.classList.contains('show')) {
                const botonHamburguesa = document.querySelector('.navbar-toggler');
                botonHamburguesa.click();
            }
        });
    });
});

const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
    const edad = document.getElementById('edad').value;
    const nombre = document.getElementById('nombre').value;

    if (edad < 1 || edad > 100) {
        alert("Por favor, ingresa una edad válida entre 1 y 100 años.");
        event.preventDefault();
    }

    if (nombre.length < 3) {
        alert("El nombre es demasiado corto.");
        event.preventDefault();
    }
});