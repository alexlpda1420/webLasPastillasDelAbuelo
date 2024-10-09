// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rutas
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    // Aquí deberías agregar la lógica para guardar el usuario en la base de datos
    console.log('Registro de usuario:', username);
    res.json({ message: 'Usuario registrado exitosamente' });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // Aquí deberías agregar la lógica para verificar el usuario
    console.log('Inicio de sesión de usuario:', username);
    res.json({ message: 'Inicio de sesión exitoso' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
