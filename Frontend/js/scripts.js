// Script to show preview pop-ups on hover
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('mouseover', function(e) {
        const previewText = this.getAttribute('data-preview');
        const previewBox = document.getElementById('preview');
        previewBox.textContent = previewText;
        previewBox.style.display = 'block';
        previewBox.style.top = (e.pageY + 15) + 'px';
        previewBox.style.left = (e.pageX + 15) + 'px';
    });

    link.addEventListener('mousemove', function(e) {
        const previewBox = document.getElementById('preview');
        previewBox.style.top = (e.pageY + 15) + 'px';
        previewBox.style.left = (e.pageX + 15) + 'px';
    });

    link.addEventListener('mouseout', function() {
        const previewBox = document.getElementById('preview');
        previewBox.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const previewLinks = document.querySelectorAll('.preview-link');
    const previewDiv = document.getElementById('preview');
    
    previewLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            const href = link.getAttribute('href');
            previewDiv.innerHTML = `<iframe src="${href}" loading="lazy"></iframe>`;
            previewDiv.style.display = 'block';
            const rect = link.getBoundingClientRect();
            previewDiv.style.top = `${rect.bottom + window.scrollY}px`;
            previewDiv.style.left = `${rect.left}px`;
        });

        link.addEventListener('mouseout', () => {
            previewDiv.style.display = 'none';
        });
    });
});

async function getUsers() 
{
    try {
        const response = await axios.get('http://localhost:3000/users');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    
}

async function getAlbums() 
{
    try {
        const response = await axios.get('http://localhost:3000/albums');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    
}

// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.formulario-album');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();  // Prevenimos el comportamiento por defecto (recargar la página).
  
      const albumData = {
        título: document.querySelector('#titulo').value,
        año: document.querySelector('#ano').value,
        descripción: document.querySelector('#descripcion').value,
        linkSpotify: document.querySelector('#linkSpotify').value,
        canciones: [], // Aquí deberías capturar las canciones si las tienes en el formulario.
        portada: document.querySelector('#imagen').value,
        linkYoutube: document.querySelector('#linkSpotify').value, // O puedes pedir un campo separado para YouTube.
      };
  
      // Obtener las canciones desde el formulario si se agregan dinámicamente
      const cancionesElements = document.querySelectorAll('.cancion');
      cancionesElements.forEach(cancion => {
        albumData.canciones.push({
          título: cancion.querySelector('input[name="nombreCancion"]').value,
          duración: cancion.querySelector('input[name="duracion"]').value,
          linkYoutube: cancion.querySelector('input[name="linkYoutube"]').value
        });
      });
  
      // Ahora enviamos los datos al backend con Axios
      axios.post('http://localhost:3000/albums', albumData)
        .then(response => {
          console.log('Álbum agregado:', response.data);
          localStorage.setItem('newAlbum', JSON.stringify(response.data));
          window.location.href = 'discografia.html'; // Redirigir a la página de discografía
        })
        .catch(error => {
          console.error('Hubo un error:', error);
          alert('Error al agregar el álbum.');
        });
    });
  });

  // scripts.js
/* document.addEventListener('DOMContentLoaded', function () {
    const albumesContainer = document.querySelector('#albumesContainer');
  
    // Función para cargar todos los álbumes desde el backend
    function cargarAlbumes() {
      axios.get('http://localhost:3000/albums')
        .then(response => {
          const albums = response.data;
          albums.forEach(album => {
            const albumElement = document.createElement('div');
            albumElement.classList.add('album-item');
            albumElement.innerHTML = `
              <a href="album${album._id}.html">
                <img src="${album.portada}" alt="Álbum ${album.título}" />
                <p>${album.título}</p>
              </a>
              <button class="btn eliminar-btn">Eliminar</button>
            `;
            albumesContainer.appendChild(albumElement);
          });
        })
        .catch(error => {
          console.error('Error al cargar los álbumes:', error);
        });
    }
  
    cargarAlbumes();  // Llamamos a la función para cargar los álbumes al inicio
  });
   */
  
// Obtener todos los botones de eliminar
const botonesEliminar = document.querySelectorAll('.eliminar-btn');

// Iterar sobre cada botón y agregar un evento de clic
botonesEliminar.forEach(boton => {
  boton.addEventListener('click', (event) => {
    // Obtener el contenedor del álbum
    const albumItem = event.target.closest('.album-item');
    const albumName = albumItem.querySelector('p').textContent;  // Obtener el nombre del álbum
    const albumId = albumItem.getAttribute('data-album-id');  // Suponiendo que tienes el ID del álbum en un atributo

    // Mostrar una alerta de confirmación
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Quieres eliminar el álbum "${albumName}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Enviar solicitud DELETE para eliminar el álbum
        axios.delete(`http://localhost:3000/albums/${albumId}`)
          .then(response => {
            // Mostrar mensaje con SweetAlert
            Swal.fire({
              title: 'Eliminado',
              text: `El álbum "${albumName}" ha sido eliminado.`,
              icon: 'success',
              confirmButtonText: 'Ok'
            }).then(() => {
              // Eliminar el álbum de la grilla en la página
              albumItem.remove();

              // También puedes recargar la página o hacer alguna otra acción si lo prefieres
              // location.reload();  // Esto recarga la página
            });
          })
          .catch(error => {
            Swal.fire({
              title: 'Error',
              text: 'No se pudo eliminar el álbum. Intenta nuevamente.',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          });
      }
    });
  });
});

  document.addEventListener('DOMContentLoaded', function() {
    const albumesContainer = document.querySelector('#albumesContainer');
    const gridContainer = albumesContainer.querySelector('.grid-container');
    
    // Verificar si hay un álbum recién agregado en localStorage
    const newAlbum = localStorage.getItem('newAlbum');
    
    if (newAlbum) {
        const album = JSON.parse(newAlbum);
        agregarAlbumAGrilla(album); // Agregarlo a la grilla
        
        // Eliminar el álbum de localStorage para evitar que se agregue más de una vez
        localStorage.removeItem('newAlbum');
    }

    // Función para cargar los álbumes existentes
    
    cargarAlbumes();
});

function agregarAlbumAGrilla(album) {
    const gridContainer = document.querySelector('.grid-container');

    const albumItem = document.createElement('div');
    albumItem.classList.add('album-item');
    albumItem.setAttribute('data-album-name', album.título);  

    albumItem.innerHTML = `
        <a href="album${album._id}.html">
            <img src="${album.portada}" alt="Álbum ${album.título}" />
            <p>${album.título}</p>
        </a>
        <button class="btn eliminar-btn">Eliminar</button>
    `;

    gridContainer.appendChild(albumItem);
}


getUsers();
getAlbums();
 


