//Tarea numero 6 hecha por Julian Gaviria grupo 13
const express = require("express");
const app = express();
const port = 5000;

// Importar rutas
const getProducts = require("./routes/getProducts");
const addProducts = require("./routes/addProducts");
const updateProducts = require("./routes/updateProducts");
const deleteProducts = require("./routes/deleteProducts");

// Middleware
app.use(express.json());

// Usar rutas
app.use(getProducts);
app.use(addProducts);
app.use(updateProducts);
app.use(deleteProducts);

// Ruta principal
app.get("/", (req, res) => {
    res.send(`ESCUCHANDO EN EL PUERTO ${port}`);
});

// Escuchar el servidor
app.listen(port, () => {
    console.log("Escuchando en el puerto", port);
});
