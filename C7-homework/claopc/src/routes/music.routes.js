const { Router } = require('express');
const { sequelize } = require('../db/sequelize');

const router = Router();

// REST API

//Obtener la lista de productos GET/artists
router.get('/artists', async (req, res) => {

  try {
    const artists = await sequelize.query(`
      SELECT * FROM artists;
    `, {
      type: sequelize.QueryTypes.SELECT,
    })
   
    res.send(artists);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({msg: 'Internal Server Error'})
  }
  
});

//Obtener un producto por su id GET/artists/:id
router.get('/artists/:id', async (req, res) =>{
    const id = parseInt(req.params.id);

    try {
        const [artist] = await sequelize.query(`
          SELECT * FROM artists
          WHERE id = :id;        
        `, {
          type: sequelize.QueryTypes.SELECT,
          replacements: {id},
        })

        if (!artist) return res.status(400).json({msg: 'Artist not found'});

        res.json(artist);

    } catch (error) {
        console.error(error.message);
        response.status(500).json({msg: 'Internal Server Error'});
    }    
    
})

router.post('/artists', async (req, res) => {    

    try {
      const { name, bio, photoUrl } = req.body;
    
      if (!name || !bio || !photoUrl) 
          return res.status(400).json({msg: 'All fields are required'});

      const [product] = await sequelize.query(`
        INSERT INTO artists (name, bio, photoUrl)
        VALUES (:name, :bio, :photoUrl) 
        RETURNING *
      `, {
        type: sequelize.QueryTypes.INSERT,
        replacements: {name, bio, photoUrl}
      })

      console.log('artists: ', product)

      res.status(201).json(product[0])
      
    } catch (error) {
      console.error(error.message)
      res.status(500).json({msg: 'Internal Server Error'})
    }        
});

router.put('/artists/:id', async (req, res) => {    

    try {
      const id = parseInt(req.params.id);

      const {name, bio, photoUrl} = req.body;

      const [artist] = await sequelize.query(`
          UPDATE artists
          SET name = :name, 
              bio  = :bio,
              photoUrl = :photoUrl
          WHERE id = :id
          RETURNING *;
        `, {
          type: sequelize.QueryTypes.UPDATE,
          replacements: {id, name, bio, photoUrl}
      })
        
      console.log('update: ', artist)

      if(!artist.length) return res.status(400).json(artist)

      res.json(artist[0]);

    } catch (error) {
      console.error(error.message);
      res.status(500).json({msg: 'Internal Server Error'});
    }
    
});

router.delete('/artists/:id', async (req, res) => {
  try {
      const id = Number(req.params.id);
      

      const [artist] = await sequelize.query(`
          DELETE FROM artists
          WHERE id = :id
          RETURNING *;
      `, {
        type: sequelize.QueryTypes.DELETE,
        replacements: { id }
      })

      console.log(artist);

      if (!artist) return res.status(400).json({msg: "Artist not found"})
      
      res.json(artist)

  } catch (error) {
      console.error(error.message);
      res.status(500).json({msg: 'Internal Server Error'})
    
  }  
    
})

module.exports = router;