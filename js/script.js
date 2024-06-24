// VARIABLES//
var menu = document.querySelector('#hamburger-menu .hamburger-list');
var overlay = document.querySelector('#overlay');

/*abrir el menu hamburgesa */
document.getElementById('hamburger-button').addEventListener('click', function() {
    menu.classList.toggle('open');
    overlay.style.display = 'block'; // Muestra el overlay cuando se abre el menú
});

/*cerrar el menu hamburgesa */
document.getElementById('close-button').addEventListener('click', function() {
    menu.classList.remove('open');
    overlay.style.display = 'none'; // Oculta el overlay cuando se cierra el menú
});