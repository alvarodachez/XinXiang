// Menú desplegable

let botonMenu = document.getElementById("showMenu");

// Mostrar el menú al hacer click
botonMenu.addEventListener('click', () => {
    document.getElementById("dropMenu").classList.toggle("show");
})

// Ocultar el menú al hacer click furea del menú
window.addEventListener('click', (e) => {
    if (!e.target.matches('.showMenu')) {
        let elementos = document.getElementsByClassName("menuContent");
        for (i = 0; i < elementos.length; i++) {
            let elemento = elementos[i];
            if (elemento.classList.contains('show')) {
                elemento.classList.remove('show');
            }
        }
    }
})