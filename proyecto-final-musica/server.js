// const express = require('express');
// const sequelize = require('./config/database');
// const Artist = require('./models/artist');
// const Song = require('./models/song');

// const app = express();
// app.use(express.json());

// app.post('/artists', async (req, res) => {
//   try {
//     const artist = await Artist.create(req.body); 
//     res.status(201).json(artist);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.get('/artists', async (req, res) => {
//   try {
//     const artists = await Artist.findAll();
//     res.json(artists);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.put('/artists/:id', async (req, res) => {
//   try {
//     const [updated] = await Artist.update(req.body, { where: { id: req.params.id } });
//     if (updated) {
//       res.json({ message: 'Artista actualizado' });
//     } else {
//       res.status(404).json({ message: 'Artista no encontrado' });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.delete('/artists/:id', async (req, res) => {
//   try {
//     const deleted = await Artist.destroy({ where: { id: req.params.id } });
//     if (deleted) {
//       res.json({ message: 'Artista eliminado' });
//     } else {
//       res.status(404).json({ message: 'Artista no encontrado' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.post('/songs', async (req, res) => {
//   try {
//     const song = await Song.create(req.body);
//     res.status(201).json(song);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.get('/songs', async (req, res) => {
//   try {
//     const songs = await Song.findAll({ include: Artist });
//     res.json(songs);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.put('/songs/:id', async (req, res) => {
//   try {
//     const [updated] = await Song.update(req.body, { where: { id: req.params.id } });
//     if (updated) {
//       res.json({ message: 'Canción actualizada' });
//     } else {
//       res.status(404).json({ message: 'Canción no encontrada' });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.delete('/songs/:id', async (req, res) => {
//   try {
//     const deleted = await Song.destroy({ where: { id: req.params.id } });
//     if (deleted) {
//       res.json({ message: 'Canción eliminada' });
//     } else {
//       res.status(404).json({ message: 'Canción no encontrada' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// sequelize.sync().then(() => {
//   app.listen(3000, () => {
//     console.log('Servidor corriendo en el puerto 3000');
//   });
// });

// Tarea 9

const express = require('express');
const { Sequelize } = require('sequelize');
const sequelize = require('./config/database');
const Artist = require('./models/artist');
const Song = require('./models/song');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/artists', async (req, res) => {
  try {
    const artist = await Artist.create(req.body); 
    res.status(201).json(artist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/artists', async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/artists/:id', async (req, res) => {
  try {
    const [updated] = await Artist.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      res.json({ message: 'Artista actualizado' });
    } else {
      res.status(404).json({ message: 'Artista no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/artists/:id', async (req, res) => {
  try {
    const deleted = await Artist.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.json({ message: 'Artista eliminado' });
    } else {
      res.status(404).json({ message: 'Artista no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/songs', async (req, res) => {
  try {
    const song = await Song.create(req.body);
    res.status(201).json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/songs', async (req, res) => {
  try {
    const songs = await Song.findAll({ include: Artist });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/songs/:id', async (req, res) => {
  try {
    const [updated] = await Song.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      res.json({ message: 'Canción actualizada' });
    } else {
      res.status(404).json({ message: 'Canción no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/songs/:id', async (req, res) => {
  try {
    const deleted = await Song.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.json({ message: 'Canción eliminada' });
    } else {
      res.status(404).json({ message: 'Canción no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/artists/:id/songs', async (req, res) => {
  try {
    const songs = await Song.findAll({
      where: { artistId: req.params.id },
    });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/songs-with-artists', async (req, res) => {
  try {
    const songs = await Song.findAll({
      include: Artist,
    });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/songs/artist/:artistId', async (req, res) => {
  try {
    const songs = await Song.findAll({
      where: { artistId: req.params.artistId },
    });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/artists-by-song-duration/:duration', async (req, res) => {
  try {
    const artists = await Artist.findAll({
      include: {
        model: Song,
        where: { duration: { [Sequelize.Op.gte]: req.params.duration } },
      },
    });
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
  });
});