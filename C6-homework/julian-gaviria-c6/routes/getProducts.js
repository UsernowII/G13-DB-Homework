const express = require("express");
const router = express.Router();
const { products } = require("../products.js");

router.get("/", (req, res) => {
    res.send(`ECUCHANDO EN EL PUERTO ${port}`);
});

router.get("/products", (req, res) => {
    res.json(products);
});

module.exports = router;
