import express from 'express';
import Song from '../models/song.js';
import Artist from '../models/artist.js';

const router = express.Router();

router.get('/with-artists', async (req, res) => {
  try {
    const songs = await Song.findAll({ include: Artist });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/artist/:artistId', async (req, res) => {
  try {
    const { artistId } = req.params;
    const songs = await Song.findAll({ where: { artistId } });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;