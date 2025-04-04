const express = require('express');
const app = express();
const artistsRouter = require('./routes/artists');
const songsRouter = require('./routes/songs');
const {sequelize} = require('./models')
const cors = require('cors');
app.use(cors());
require('dotenv').config();

// Verifica la conexión al iniciar el servidor
sequelize.authenticate()
  .then(() => console.log('Conectado a la base de datos'))
  .catch(error => console.error('Error de conexión:', error));


app.use(express.json());
app.use('/artists', artistsRouter);
app.use('/songs', songsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
