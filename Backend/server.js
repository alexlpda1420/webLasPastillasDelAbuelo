// backend/server.js

// mongodb+srv://aeroldan:N4p01420$$@clasemongo.q4wxy.mongodb.net/?retryWrites=true&w=majority&appName=ClaseMongo


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('../routes/index.js');
const url = 
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
