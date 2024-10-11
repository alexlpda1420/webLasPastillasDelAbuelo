const mongoose = require('mongoose');

const canciónSchema = new mongoose.Schema({
    título: {
        type: String,
        required: [true, 'El título de la canción es obligatorio.']
    },
    duración: {
        type: String,
        required: [true, 'La duración de la canción es obligatoria.']
    }
});

const albumSchema = new mongoose.Schema({
    título: {
        type: String,
        required: [true, 'El título es obligatorio.']
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
    }
});

module.exports = mongoose.model('Album', albumSchema);
