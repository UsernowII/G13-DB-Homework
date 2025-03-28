const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de la Biblioteca de Música!');
});

app.post('/songs', async (req, res) => {
  try {
    const song = await db.Song.create(req.body);
    res.status(201).json(song);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.get('/songs', async (req, res) => {
  try {
    const songs = await db.Song.findAll();
    res.json(songs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.put('/songs/:id', async (req, res) => {
  try {
    await db.Song.update(req.body, { where: { id: req.params.id } });
    res.json({ message: 'Canción actualizada' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.delete('/songs/:id', async (req, res) => {
  try {
    await db.Song.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Canción eliminada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.post('/artists', async (req, res) => {
  try {
    const artist = await db.Artists.create(req.body);
    res.status(201).json(artist);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.get('/artists', async (req, res) => {
  try {
    const artists = await db.Artists.findAll();
    res.json(artists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.put('/artists/:id', async (req, res) => {
  try {
    await db.Artists.update(req.body, { where: { id: req.params.id } });
    res.json({ message: 'Artista actualizado' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.delete('/artists/:id', async (req, res) => {
  try {
    await db.Artists.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Artista eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});