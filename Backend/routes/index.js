const express = require("express");

// Instancia para manejar las rutas
const router = express.Router();

const User = require("../models/Users.js");
const Album = require("../models/Album.js");

// Ruta para crear un nuevo usuario
router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Ruta para crear un nuevo álbum
router.post("/albums", async (req, res) => {
  try {
    const album = new Album(req.body);
    await album.save();
    res.status(201).send(album);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Ruta para consultar todos los usuarios
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ruta para consultar todos los álbumes
router.get("/albums", async (req, res) => {
  try {
    const albums = await Album.find();
    res.status(200).send(albums);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ruta para consultar un usuario por ID
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("Usuario no encontrado.");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ruta para consultar un álbum por ID
router.get("/albums/:id", async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) {
      return res.status(404).send("Álbum no encontrado.");
    }
    res.status(200).send(album);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
