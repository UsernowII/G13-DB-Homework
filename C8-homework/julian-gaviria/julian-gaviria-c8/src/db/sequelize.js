import { Sequelize } from "sequelize";
import env from "../config/env.js";

const { databaseDB, dialect, hostDB, usernameDB, passwordDB, portDB } = env;

export const sequelize = new Sequelize(databaseDB, usernameDB, passwordDB, {
    host: hostDB,
    dialect: dialect,
    port: portDB,
    logging: false,
});

export default sequelize;
