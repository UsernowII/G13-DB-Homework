
import 'dotenv/config.js';

export default {
    port: process.env.PORT || 3000,
    usernameDB: process.env.USER_DB,
    databaseDB: process.env.DATABASE_DB,
    passwordDB: process.env.PASSWORD_DB,
    hostDB: process.env.HOSTDB,
    portDB: Number(process.env.PORT_DB),
    dialect: process.env.DIALECT,
}