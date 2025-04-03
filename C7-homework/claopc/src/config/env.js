require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    usernameDB: process.env.USER_DB,
    databaseDB: process.env.DATABAE_DB,
    passwordDB: process.env.PASSWORD_DB,
    hostDB: process.env.HOST_DB,
    portDB: Number(process.env.PORT_DB),
    dialect: process.env.DIALECT,
}