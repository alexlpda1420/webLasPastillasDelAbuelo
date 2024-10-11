const express = require('express');

// Instancia para manejar las rutas
const router = express.Router();

router.get ("/", (req, res) => {
    res.status(200).send("Hola!")
});

router.get ("/prueba", (req, res) => {
    res.status(200).send("PRUEBA")
});

router.get ("/prueba2", (req, res) => {
    res.status(200).send("PRUEBA2")
});

module.exports = router;