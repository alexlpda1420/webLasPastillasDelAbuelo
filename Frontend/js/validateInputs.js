// validateInputs.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. Función para validar el formulario de Login
    function validateLoginForm(event) {
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value.trim();
        let valid = true;
        let messages = [];

        if (username === "") {
            valid = false;
            messages.push("El campo de nombre de usuario no puede estar vacío.");
        }

        if (password === "") {
            valid = false;
            messages.push("El campo de contraseña no puede estar vacío.");
        }

        if (!valid) {
            event.preventDefault(); // Evita el envío del formulario
            Swal.fire({
                title: 'Error de Validación',
                html: messages.join('<br>'),
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    }

    // 2. Función para validar el formulario de Edición de Álbumes
    function validateEditAlbumForm(event) {
        const albumTitle = document.getElementById('edit-album-title').value.trim();
        const albumDescription = document.getElementById('edit-album-description').value.trim();
        let valid = true;
        let messages = [];

        if (albumTitle === "") {
            valid = false;
            messages.push("El título del álbum no puede estar vacío.");
        }

        if (albumDescription === "") {
            valid = false;
            messages.push("La descripción del álbum no puede estar vacía.");
        }

        if (!valid) {
            event.preventDefault(); // Evita el envío del formulario
            Swal.fire({
                title: 'Error de Validación',
                html: messages.join('<br>'),
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    }

    // 3. Función para validar el formulario de Agregación de Canciones
    function validateAddSongForm(event) {
        const songTitle = document.getElementById('add-song-title').value.trim();
        const artistName = document.getElementById('add-song-artist').value.trim();
        let valid = true;
        let messages = [];

        if (songTitle === "") {
            valid = false;
            messages.push("El título de la canción no puede estar vacío.");
        }

        if (artistName === "") {
            valid = false;
            messages.push("El nombre del artista no puede estar vacío.");
        }

        if (!valid) {
            event.preventDefault(); // Evita el envío del formulario
            Swal.fire({
                title: 'Error de Validación',
                html: messages.join('<br>'),
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    }

    // 4. Asignar las funciones de validación a los formularios
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', validateLoginForm);
    }

    const editAlbumForm = document.getElementById('edit-album-form');
    if (editAlbumForm) {
        editAlbumForm.addEventListener('submit', validateEditAlbumForm);
    }

    const addSongForm = document.getElementById('add-song-form');
    if (addSongForm) {
        addSongForm.addEventListener('submit', validateAddSongForm);
    }

});
