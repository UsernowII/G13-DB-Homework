import { Router } from "express";
const router = Router();

import { sequelize } from "../db/sequelize.js";

// Añadir una nueva canción
router.post("/songs", async (req, res) => {
    const { title, artistId, releaseYear, duration, coverUrl } = req.body;
    if (
        !req.body.title ||
        !req.body.releaseYear ||
        !req.body.duration ||
        !req.body.coverUrl
    ) {
        return res
            .status(400)
            .send("Debe ingresar todos los campos requeridos.");
    }
    try {
        const [songs] = await sequelize.query(
            `
            INSERT INTO songs (title, artistId, releaseYear, duration,coverUrl )
            VALUES ( :title, :artistId, :releaseYear, :duration,:coverUrl)
            RETURNING *
        `,
            {
                type: sequelize.QueryTypes.INSERT,
                replacements: {
                    title,
                    artistId,
                    releaseYear,
                    duration,
                    coverUrl,
                },
            }
        );

        res.status(201).json(songs[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal server error!!" });
    }
});

// Añadir una nueva artista
router.post("/artists", async (req, res) => {
    const { name, bio, photoUrl } = req.body;
    if (!req.body.name || !req.body.bio || !req.body.photoUrl) {
        return res
            .status(400)
            .send("Debe ingresar todos los campos requeridos.");
    }
    try {
        const [artists] = await sequelize.query(
            `
            INSERT INTO artists (name, bio, photoUrl )
            VALUES ( :name, :bio, :photoUrl)
            RETURNING *
        `,
            {
                type: sequelize.QueryTypes.INSERT,
                replacements: {
                    name,
                    bio,
                    photoUrl,
                },
            }
        );

        res.status(201).json(artists[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal server error!!" });
    }
});

export default router;
