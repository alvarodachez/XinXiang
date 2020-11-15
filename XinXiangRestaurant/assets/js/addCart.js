// Recuperamos el botón de añadir al carrito
let botonAniade = document.getElementsByClassName("addCart")[0];

// Añadimos funcionalidad para cuando se hace clic
botonAniade.addEventListener('click', (e) => {
    // Recuperamos el precio y la ruta de la imagen del producto
    let precio = document.getElementById("productPrice").innerHTML;
    let rutaImagen = document.getElementById("img").src;
    // Guardamos las dos variables en el storage
    sessionStorage.setItem("precio", precio);
    sessionStorage.setItem("rutaImagen", rutaImagen);
    // Abrimos la página del carrito
    location.href = "carrito.html"
})