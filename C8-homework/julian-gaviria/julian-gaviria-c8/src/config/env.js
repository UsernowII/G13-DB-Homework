import "dotenv/config.js";

export default {
    port: process.env.PORT,
    usernameDB: process.env.USER_DB,
    databaseDB: process.env.DATABASE_DB,
    passwordDB: process.env.PASSWORD_DB,
    hostDB: process.env.HOST_DB,
    portDB: Number(process.env.PORT_DB),
    dialect: process.env.DIALECT,
};
