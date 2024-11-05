const mongoose = require('mongoose');

const canciónSchema = new mongoose.Schema({
    título: {
        type: String,
        required: [true, 'El título de la canción es obligatorio.']
    },
    duración: {
        type: Number,
        required: [true, 'La duración de la canción es obligatoria.']
    },
    linkYoutube: {
        type: String,
        required: [true, 'El enlace de YouTube es obligatorio.'],
        validate: {
            validator: function(v) {
                return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(v);
            },
            message: 'El enlace debe ser una URL válida de YouTube.'
        }
    } 
});

const albumSchema = new mongoose.Schema({
    título: {
        type: String,
        required: [true, 'El título es obligatorio.']
    },
    linkSpotify: {
        type: String,
        required: [true, 'El enlace al álbum en Spotify es obligatorio.'],
        validate: {
            validator: function(v) {
                return /^(https?:\/\/)?(www\.)?spotify\.com\//.test(v);
            },
            message: 'El enlace debe ser una URL válida de Spotify.'
        }
    },
    descripción: {
        type: String,
        required: [true, 'La descripción es obligatoria.'],
        minlength: [5, 'La descripción debe tener al menos 5 caracteres.'],
        maxlength: [200, 'La descripción no puede exceder los 200 caracteres.']
    },
    año: {
        type: Number,
        required: [true, 'El año de lanzamiento es obligatorio.'],
        min: [1, 'El año debe ser mayor a 0.']
    },
    canciones: [canciónSchema],
    portada: {
        type: String,
        required: [true, 'La URL de la portada es obligatoria.']
    },
    linkYoutube: {
        type: String,
        required: [true, 'El enlace de YouTube es obligatorio.'],
        validate: {
            validator: function(v) {
                return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(v);
            },
            message: 'El enlace debe ser una URL válida de YouTube.'
        }
    }
});

const album = mongoose.model('album', albumSchema);
module.exports = album;



