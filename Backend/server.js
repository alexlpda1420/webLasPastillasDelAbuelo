// backend/server.js

const express = require('express');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());



// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
