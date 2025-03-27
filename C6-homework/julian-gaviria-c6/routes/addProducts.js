const express = require("express");
const router = express.Router();
const { products } = require("../products");

// Añadir un nuevo producto
router.post("/products", (req, res) => {
    if (
        !req.body.name ||
        !req.body.price ||
        !req.body.category ||
        !req.body.description
    ) {
        return res
            .status(400)
            .send("Debe ingresar todos los campos requeridos.");
    }

    const product = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
    };

    products.push(product);
    res.status(201).json({ message: "Producto añadido con éxito!", product });
});

module.exports = router;
