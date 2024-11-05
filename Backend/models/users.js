const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio.'],
        minlength: [2, 'El nombre debe tener al menos 2 caracteres.']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio.'],
        minlength: [2, 'El apellido debe tener al menos 2 caracteres.']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio.'],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Por favor, ingresa un email válido.']
    },
    contraseña: {
        type: String,
        required: [true, 'La contraseña es obligatoria.']
    },
    favoritos: {
        type: [String],
        default: []
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
//module.exports = mongoose.model('user', userSchema);
