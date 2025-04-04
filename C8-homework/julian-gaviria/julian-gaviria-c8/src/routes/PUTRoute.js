import { Router } from "express";
const router = Router();

import { sequelize } from "../db/sequelize.js";

// Actualizar un canciones
router.put("/songs/:songId", async (req, res) => {
    try {
        const id = parseInt(req.params.songId);
        const { title, artistId, releaseYear, duration, coverUrl } = req.body;

        const [songs] = await sequelize.query(
            "UPDATE songs SET title= :title, artistId= :artistId, releaseYear= :releaseYear, duration= :duration, coverUrl= :coverUrl WHERE id = :id RETURNING *;",
            {
                type: sequelize.QueryTypes.UPDATE,
                replacements: {
                    id,
                    title,
                    artistId,
                    releaseYear,
                    duration,
                    coverUrl,
                },
            }
        );
        if (!songs || songs.length === 0) {
            return res.status(404).json({ msg: "Producto no encontrado!!" });
        }
        songs.title = req.body.title ?? songs.title;
        songs.artistId = req.body.artistId ?? songs.artistId;
        songs.releaseYear = req.body.releaseYear ?? songs.releaseYear;
        songs.duration = req.body.duration ?? songs.duration;
        songs.coverUrl = req.body.coverUrl ?? songs.coverUrl;

        res.status(200).json({
            message: "Canción modificada con éxito!",
            songs,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal server error!!" });
    }
});

// Actualizar un artistas
router.put("/artists/:astistId", async (req, res) => {
    try {
        const id = parseInt(req.params.songsId);
        const { name, bio, photoUrl } = req.body;

        const [artists] = await sequelize.query(
            "UPDATE artists SET name= :name, bio= :bio, photoUrl= :photoUrl WHERE id = :id RETURNING *;",
            {
                type: sequelize.QueryTypes.UPDATE,
                replacements: {
                    id,
                    name,
                    bio,
                    photoUrl,
                },
            }
        );
        if (!artists || artists.length === 0) {
            return res.status(404).json({ msg: "Producto no encontrado!!" });
        }
        artists.name = req.body.name ?? artists.name;
        artists.bio = req.body.bio ?? artists.bio;
        artists.photoUrl = req.body.photoUrl ?? artists.photoUrl;

        res.status(200).json({
            message: "Astista modificado con éxito!",
            songs,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal server error!!" });
    }
});

export default router;
