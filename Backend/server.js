// Llamar a express (dependencia)

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");
const User = require("./models/Users");
const Album = require("./models/Album");


// Resto de tu configuración de Express

const url =
  "mongodb+srv://aeroldan:N4p01420$$@clasemongo.q4wxy.mongodb.net/?retryWrites=true&w=majority&appName=ClaseMongo";
const app = express();
// Organizador de la data
app.use(express.json());

const path = require("path");
app.use(express.static(path.join(__dirname,"../Frontend")));
const PORT = process.env.PORT || 3000;
app.use("/health", (req, res) => res.sendStatus(200));

// Middleware - organizador de las rutas
app.use("/", router);

const connectToMongo = async () => {
  try {
    await mongoose.connect(url);

    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(
        `Servidor backend corriendo en http://localhost:${PORT} y db conectada`
      );
    });
  } catch (error) {
    console.log("Hubo un error en la conexión");
  }
};

connectToMongo();
