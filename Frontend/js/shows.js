// shows.js

document.addEventListener('DOMContentLoaded', () => {
    const welcomeSpan = document.getElementById('welcome');

    // 1. Crear el objeto tickets
    let tickets = {
        "Estadio Luna Park, Buenos Aires": 100,
        "Teatro Gran Rex, Buenos Aires": 0, 
        "Teatro Colón, Buenos Aires": 2, 
        "Córdoba Rock Arena, Córdoba": 0, 
    };

    // 2. Función para pedir el nombre
    function pedirNombre() {
        let nombre = prompt("¡Bienvenido a los Próximos Shows de Las Pastillas del Abuelo!\nPor favor, ingresa tu nombre:");

        // Validaciones
        while (true) {
            if (nombre === null || nombre.trim() === "") {
                alert("Debe completar su nombre.");
                nombre = prompt("Por favor, ingresa tu nombre:");
            } else if (nombre.trim().length < 2) {
                alert("El nombre debe tener al menos 2 letras.");
                nombre = prompt("Por favor, ingresa tu nombre completo:");
            } else {
                return nombre.trim();
            }
        }
    }

    // 3. Función para pedir la edad
    function pedirEdad() {
        let edad = prompt("Por favor, ingresa tu edad:");

        while (true) {
            if (edad === null || edad.trim() === "") {
                alert("Debe completar su edad.");
                edad = prompt("Por favor, ingresa tu edad:");
            } else if (isNaN(edad) || edad.trim() <= 0) {
                alert("Por favor, ingresa una edad válida.");
                edad = prompt("Por favor, ingresa tu edad:");
            } else {
                return parseInt(edad.trim());
            }
        }
    }

    // 4. Función principal para la interacción inicial
    function iniciarInteraccion() {
        const nombreUsuario = pedirNombre();
        const edadUsuario = pedirEdad();

        // Mostrar el mensaje en el span
        welcomeSpan.textContent = `¡Hola, ${nombreUsuario}! Tienes ${edadUsuario} años. ¡Disfruta de nuestros próximos shows!`;
    }

    // 5. Función para manejar la compra de tickets
    window.getTickets = function(place) {
        if (tickets.hasOwnProperty(place)) {
            if (tickets[place] > 0) {
                // Confirmar la compra
                Swal.fire({
                    title: 'Confirmar Compra',
                    text: `¿Deseas comprar un ticket para el show en ${place}?`,
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Sí, comprar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Disminuir el número de tickets
                        tickets[place]--;

                        // Mostrar alerta de éxito
                        Swal.fire({
                            title: '¡Compra Exitosa!',
                            text: `Has comprado un ticket para ${place}.`,
                            icon: 'success',
                            confirmButtonText: 'Aceptar'
                        });

                        // Deshabilitar el botón si los tickets se han agotado
                        if (tickets[place] === 0) {
                            disableSoldOutButtons();
                        }
                    }
                });
            } else {
                // Mostrar alerta de tickets agotados
                Swal.fire({
                    title: 'Tickets Agotados',
                    text: `Lo sentimos, ya no hay tickets disponibles para el show en ${place}.`,
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            }
        } else {
            // Mostrar alerta de error si el lugar no existe en el objeto
            Swal.fire({
                title: 'Error',
                text: 'El lugar seleccionado no existe.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    }

    // 6. Función para deshabilitar botones de shows agotados
    function disableSoldOutButtons() {
        for (const [place, cantidad] of Object.entries(tickets)) {
            if (cantidad === 0) {
                // Seleccionar el botón correspondiente usando el atributo data-place
                const button = document.querySelector(`.btn[data-place="${place}"]`);
                if (button) {
                    button.textContent = "SOLD OUT";
                    button.style.backgroundColor = "#6c757d"; // Cambiar color a gris
                    button.style.cursor = "not-allowed";
                    button.removeAttribute('onclick');
                    button.setAttribute('disabled', 'disabled');
                }
            }
        }
    }

    // 7. Iniciar la interacción al cargar la página
    iniciarInteraccion();

    // 8. Deshabilitar botones ya agotados al cargar la página
    disableSoldOutButtons();
});
