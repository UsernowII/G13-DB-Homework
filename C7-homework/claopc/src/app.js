const express = require('express');
const app = express();

const env = require('./config/env.js')

const { sequelize } = require('./db/sequelize.js');

const musicRoutes = require('./routes/music.routes.js')

//console.log(JSON.parse(products));

app.use(express.json());


async function main(){

    app.use(musicRoutes);

    try {
      await sequelize.authenticate();  
      console.log('Connection has been established succesfully')

      app.listen(env.port, () => {
        console.log('Server is running on port',  env.port)
      });
      
    } catch (error) {
        console.error('Unable to connect to the database', error)
    }
}

main();

