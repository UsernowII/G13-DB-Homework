const express = require("express");
const app = express();
const env = require("./config/env.js");

const port = process.env.PORT;

//importar bd
const { sequelize } = require("../src/db/sequelize.js");

// Importar rutas
const getRoute = require("../src/routes/GETRoute.js");
const postRoute = require("./routes/POSTRoute.js");
const putRoute = require("../src/routes/PUTRoute.js");
const deleteRoute = require("../src/routes/DELETERoute.js");

// Middleware
app.use(express.json());

// Usar rutas
app.use(getRoute);
app.use(postRoute);
app.use(putRoute);
app.use(deleteRoute);

// Ruta principal
app.get("/", (req, res) => {
    res.send(`ESCUCHANDO EN EL PUERTO ${port}`);
});

//testintg the conection
async function main() {
    try {
        await console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
main();
// Escuchar el servidor
app.listen(port, () => {
    console.log("Escuchando en el puerto", port);
});
