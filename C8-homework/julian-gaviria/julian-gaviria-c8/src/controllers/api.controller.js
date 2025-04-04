import artist from "../models/artists.model.js";
import song from "../models/songs.model.js";
import { where } from "sequelize";
import { serverError } from "../helpers/https.js";

export class apiController {
    getSongs = async (req, res) => {
        try {
            const songs = await song.findAll();
            res.send(songs);
        } catch (error) {
            serverError(error.message, res);
        }
    };

    getSongsbyId = async (req, res) => {
        try {
            const id = parseInt(req.params.songsId);

            const songs = await song.findByPk(id);
            if (!songs) {
                return res.status(404).json({ msg: "Cancion no encontrada!!" });
            }
            res.json({ msg: "La cancion buscada es:", songs });
            // console.log({ songs });
        } catch (error) {
            serverError(error.message, res);
        }
    };

    getArtists = async (req, res) => {
        try {
            const artists = await artist.findAll();
            res.send(artists);
        } catch (error) {
            serverError(error.message, res);
        }
    };

    getArtistsbyId = async (req, res) => {
        try {
            const id = parseInt(req.params.artistId);

            const artists = await artist.findByPk(id);
            console.log({ artist });

            if (!artists) {
                return res.status(404).json({ msg: "Artista no encontrado!!" });
            }

            res.json({ msg: "El Artista buscado es:", artists });
        } catch (error) {
            serverError(error.message, res);
        }
    };

    createArtist = async (req, res) => {
        const { name, bio, photoUrl } = req.body;
        if (!req.body.name || !req.body.bio || !req.body.photoUrl) {
            return res
                .status(400)
                .send("Debe ingresar todos los campos requeridos.");
        }
        try {
            const artists = await artist.create({ name, bio, photoUrl });

            res.status(201).json(artists);
        } catch (error) {
            serverError(error.message, res);
        }
    };

    createSong = async (req, res) => {
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
            const songs = await song.create({
                title,
                artistId,
                releaseYear,
                duration,
                coverUrl,
            });

            res.status(201).json(songs);
        } catch (error) {
            serverError(error.message, res);
        }
    };

    updateSong = async (req, res) => {
        try {
            const songId = parseInt(req.params.songId);
            const { title, artistId, releaseYear, duration, coverUrl } =
                req.body;

            // const song = await song.update(
            //     { title, artistId, releaseYear, duration, coverUrl },
            //     {
            //         where: { id: songId },
            //         returning: true,
            //     }
            // );

            const songs = await song.findOne({ where: { id: songId } });

            if (!songs)
                return res.status(404).json({ msg: "cancion no encontrado!!" });

            songs.set({
                title,
                artistId,
                releaseYear,
                duration,
                coverUrl,
            });

            await songs.save();

            res.status(200).json(songs);
        } catch (error) {
            serverError(error.message, res);
        }
    };

    updateArtist = async (req, res) => {
        try {
            const artistId = parseInt(req.params.artistId);
            const { name, bio, photoUrl } = req.body;

            const artists = await artist.findOne({ where: { id: artistId } });

            if (!artists)
                return res.status(404).json({ msg: "Artista no encontrado!!" });

            artists.set({
                name,
                bio,
                photoUrl,
            });

            await artists.save();

            res.status(200).json(artists);
        } catch (error) {
            serverError(error.message, res);
        }
    };

    deleteSong = async (req, res) => {
        try {
            const songId = parseInt(req.params.songId);
            const songs = await song.findByPk(songId);
            if (songs < 1)
                return res.status(400).json({ msg: "Cancion no encontrada" });

            const result = await song.destroy({
                where: { id: songId },
            });

            res.status(200).json({
                message: "Cancion Eliminada con éxito!",
                songs,
            });
        } catch (error) {
            serverError(error.message, res);
        }
    };

    deleteArtist = async (req, res) => {
        try {
            const artistId = parseInt(req.params.artistId);
            const artists = await artist.findByPk(artistId);
            if (artists < 1)
                return res.status(400).json({ msg: "Artista no encontrado" });

            const result = await artist.destroy({
                where: { id: artistId },
            });

            res.status(200).json({
                message: "Artista Eliminado con éxito!",
                artists,
            });
        } catch (error) {
            serverError(error.message, res);
        }
    };
}
