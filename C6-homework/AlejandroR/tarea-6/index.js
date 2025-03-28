/* const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send ('Haciendo Prueba Express ');
} );

app.listen(port, ()=> {
    console.log('Servidor en http://localhost: ${port}');
}); */

import express from 'express';
import products from '../tarea-6/products.js';

const app= express(); // usar express en constante
const port= 3000; // creacion y asignacion de const port, sera puerto 3000

// middleware para usar Json
app.use(express.json());


/*app.get('/', (req, res)=> {
    res.send(products);
   // console.log(products);
    
}); */

app.get('/products', (req, res)=> {
    res.json(products);
});

app.get('/products/:id', (req, res)=> {
    console.log(req.params);
    const id= parseInt(req.params.id)
    const product = products.find(p => p.id === id);
    if (!product) return res.status(404).json({ message: 'Product not found'});
    res.json(product);
});

app.post('/products', (req, res) => {

    const { name, price, category, description } = req.body;

    if (!name || !price || !category || !description ) 
    return res.status(400).json({msg: 'All fields are required'});

    // Crear un nuevo producto con el id en base al último elemento del array
    const newProduct = {
        id: products[products.length - 1]?.id + 1 || 1, // Si es el primer producto, asigna id 1
        name,
        price,
        category,
        description,
    };

    products.push(newProduct); // Agregar el nuevo producto al array
    res.status(201).json(newProduct); // Retornar el nuevo producto con el id al principio
});
    
app.put('/products/:productId', (req, res) => {

    const productId = Number(req.params.productId);

    const product = products.find(p => p.id === productId);

 if (!product) return res.status(400).json({ msg: 'Product not found'});

    product.name = req.body.name ?? product.name;
    product.price = req.body.price ?? product.price;
    product.category = req.body.category ?? product.category;
    product.description = req.body.description ?? product.description;

    res.json(product);

});

app.delete('/products/:productId',  (req, res) => {

    const productId = Number(req.params.productId);

    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex === -1 ){
        return res.status(400).json({msg: 'Product Not Found'});
    }

    const [product] = products.splice(productIndex, 1);

    res.json(product);
});


//iniciar servidor 

app.listen(port, ()=> {
    console.log('Servidor en http://localhost:${port}');
});