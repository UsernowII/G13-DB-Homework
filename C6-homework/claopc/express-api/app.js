const express = require('express');
const app = express();

const { products } = require('./products');

const port = 3000;

//console.log(JSON.parse(products));

app.use(express.json());
// REST API
app.get('/', (request, response) => {
    response.send('Response!')
})

//Obtener la lista de productos GET/products
app.get('/products', (req, res) => {
    res.send(products);
});

//Obtener un producto por su id GET/products/:id
app.get('/products/:id', (req, res) =>{
    const id = parseInt(req.params.id);

    const product = products.find(product => product.id === id);    

    if (!product) return res.status(400).json({msg: 'Product not found'});

    res.json(product);
})

app.post('/products', (req, res) => {  
  const { name, price, category, description } = req.body;
    
    if(!name || !price || !category || !description) 
      return res.status(400).json({msg: 'All fields are required'});

    const newProduct = {
      id: products.length + 1,
      ...req.body,
      
    }

    products.push(newProduct);
    res.status(201).json(newProduct)
});

app.put('/products/:id', (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(product => product.id === id);

    if (!product) return res.status(400).json({msg:'Product not found'});

    product.name = req.body.name ?? product.name;
    product.price = req.body.price ?? product.price;
    product.category = req.body.category ?? product.category;
    product.description = req.body.description ?? product.description;

    res.json(product);
});

app.delete('/products/:id', (req, res) => {
    const id = Number(req.params.id)    ;
    const productIndex = products.findIndex(product => product.id === id);
    
    if (productIndex === -1) return res.status(400).json({msg:'Product not found'});

    const [product] = products.splice(productIndex, 1);

    res.json(product);
})


app.listen(port, () => {
  console.log('Server is running on port',  port)
});