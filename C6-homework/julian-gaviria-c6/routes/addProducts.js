const express = require("express");
const router = express.Router();
const { products } = require("../products.js"); // Importamos las películas

router.post("/products", (req, res) => {
    const { title, directorId, genre, releaseYear } = req.body;

    if (!title || !directorId || !genre || !releaseYear) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const movie = {
        id: movies.length + 1,
        title,
        directorId,
        genre,
        releaseYear,
    };

    movies.push(movie);
    res.status(201).json({ message: "Movie added!", movie });
});

module.exports = router; //
