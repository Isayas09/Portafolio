// Obtenemos todos los botones "Leer más" y "Leer menos"
const botonesLeerMas = document.querySelectorAll('.boton-leer-mas');
const botonesLeerMenos = document.querySelectorAll('.boton-leer-menos');

// Ocultamos todos los párrafos expandidos al cargar la página
const parrafosExpandidos = document.querySelectorAll('.texto-expandido');
parrafosExpandidos.forEach((parrafoExpandido) => {
    parrafoExpandido.style.display = 'none';
});

// Agregamos un evento de clic a los botones "Leer más"
botonesLeerMas.forEach((botonMas, index) => {
    botonMas.addEventListener('click', () => {
        // Muestra el párrafo expandido correspondiente
        const parrafoExpandido = parrafosExpandidos[index];
        parrafoExpandido.style.display = 'block';

        // Oculta el botón "Leer más" y muestra el botón "Leer menos"
        botonMas.style.display = 'none';
        botonesLeerMenos[index].style.display = 'inline';
    });
});

// Agregamos un evento de clic a los botones "Leer menos"
botonesLeerMenos.forEach((botonMenos, index) => {
    botonMenos.addEventListener('click', () => {
        // Oculta el párrafo expandido correspondiente
        const parrafoExpandido = parrafosExpandidos[index];
        parrafoExpandido.style.display = 'none';

        // Oculta el botón "Leer menos" y muestra el botón "Leer más"
        botonMenos.style.display = 'none';
        botonesLeerMas[index].style.display = 'inline';
    });
});

// JavaScript para el efecto de cambio de tamaño al desplazarse hacia abajo
window.addEventListener('scroll', () => {
    const encabezado = document.querySelector('header.encabezado');
    if (window.scrollY > 100) {
        encabezado.classList.add('encabezado-pequeño');
    } else {
        encabezado.classList.remove('encabezado-pequeño');
    }
});
