// favoritos.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Definir el array de álbumes favoritos
    const favoritos = [
        "Por Colectora",
        "Las Pastillas del Abuelo",
        "Crisis",
        "Versiones",
        "Kermesse",  
        "LunaPark",
        "Barrio",
        "Desafíos",
        "Paradojas",
        "Vivo",
        "2020"
    ];

    // 2. Función para añadir estrellas a los álbumes favoritos
    function addFavoriteStars(favorites) {
        favorites.forEach(albumName => {
            // Seleccionar el álbum correspondiente usando el atributo data-album-name
            const albumItem = document.querySelector(`.album-item[data-album-name="${albumName}"]`);
            if (albumItem) {
                // Crear un elemento span para la estrella
                const star = document.createElement('span');
                star.classList.add('favorite-star');
                star.innerHTML = ' ★'; // Puedes usar un ícono o una imagen si lo prefieres

                // Añadir la estrella al título del álbum
                const albumTitle = albumItem.querySelector('p');
                if (albumTitle) {
                    albumTitle.appendChild(star);
                }
            }
        });
    }

    // 3. Ejecutar la función con el array de favoritos
    addFavoriteStars(favoritos);
});
