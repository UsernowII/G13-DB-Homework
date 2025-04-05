import express from 'express';
import Artist from '../models/artist.js';
import Song from '../models/song.js';

const router = express.Router();

router.get('/:id/songs', async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findByPk(id, { include: Song });
    if (!artist) return res.status(404).json({ error: 'Artist not found' });
    res.json(artist.Songs);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/by-song-duration/:duration', async (req, res) => {
  try {
    const { duration } = req.params;
    const artists = await Artist.findAll({
      include: {
        model: Song,
        where: { duration: { [Op.gte]: duration } },
      },
    });
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;