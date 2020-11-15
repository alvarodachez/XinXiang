/* 
    SLIDESHOW
*/
/*
    FUNCIONALIDADES PARA LOS SlIDES
*/

// Función para mostrar las imagenes de forma automática
function showSlideAuto() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlideAuto, 4000);
}

// Función que va a mostrar la imagen en la posición que se le indique
const showSlide = (num) => {
    // Recuperamos todas las imagenes del slideshow
    let slides = document.getElementsByClassName("slide");
    // Recuperamos todos los circulos
    let dots = document.getElementsByClassName("dot");
    // Si el número que se le ha pasado es mayor que el número de imágenes se muestra la primera imagen
    if (num > slides.length) {
        slideIndex = 1;
    }
    // Si el número que se le ha pasado es menor que 1 se muestra la última imágen
    else if (num < 1) {
        slideIndex = slides.length;
    }
    // Recorremos todas las imágenes haciendo que no sean visibles
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Recorremos todos los circulos quitándoles la clase active
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Mostramos la imagen que toca
    slides[slideIndex - 1].style.display = "block";
    // Añadimos la clase active al circulo que toca
    dots[slideIndex - 1].className += " active";
}

// Recuperamoms los botones anterior y siguiente y los puntos
let botonPrev = document.getElementById("prev");
let botonNext = document.getElementById("next");
let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");

// Variable que nos va a indicar cuál es la imágen que se tiene que mostrar
let slideIndex = 0;
// Al cargar la página hacemos que se muestre la primea imagen
showSlideAuto();

//Funcionalidad de los botones
botonPrev.addEventListener('click', () => {
    slideIndex = slideIndex - 1;
    showSlide(slideIndex);
})

botonNext.addEventListener('click', () => {
    slideIndex = slideIndex + 1;
    showSlide(slideIndex);
})

dot1.addEventListener("click", () => {
    slideIndex = 1;
    showSlide(slideIndex);
})

dot2.addEventListener("click", () => {
    slideIndex = 2;
    showSlide(slideIndex);
})

dot3.addEventListener("click", () => {
    slideIndex = 3;
    showSlide(slideIndex);
})