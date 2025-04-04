import env from "../src/config/env.js";

const port = process.env.PORT;
import { Server } from "../src/servidor.js";
//importar bd
import { sequelize } from "../src/db/sequelize.js";

// Importar rutas
import apiRoutes from "../src/routes/apiRoutes.js";

//importar modelos
import "./models/index.js";

//testintg the conection
async function main() {
    try {
        await sequelize.sync({ alter: true });
        console.log("All models were syncrhonized successfully.");

        const Servidor = new Server(env.port, apiRoutes);
        Servidor.start();
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
main();
