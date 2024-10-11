// backend/server.js

// mongodb+srv://aeroldan:N4p01420$$@clasemongo.q4wxy.mongodb.net/?retryWrites=true&w=majority&appName=ClaseMongo


// Llamar a express (dependencia)
const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./routes/index');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const cors = require('cors');



// Middleware
app.use('/', router); 
app.use(express.json());
//app.use(bodyParser.json());
//app.use(cors());

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
