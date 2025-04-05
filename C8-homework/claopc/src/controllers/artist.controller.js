import { Artist } from '../models/index.js';
import  { serverError } from '../helpers/http.js'

//Se crean las funciones para acceder a los métodos del CRUD
export class ArtistController {

    get = async (req, res) => {
    
        try {
          const artists = await Artist.findAll()         
          console.log(artists);
          res.send(artists);
        } catch (error) {
            console.error(message);
        res.status(500).json({msg: 'Internal Server Error'})
        }        
    };

    getById = async (req, res) =>{
        const id = parseInt(req.params.id);
    
        try {
            const [artist] = await Artist.findByPk(id)
    
            if (!artist) return res.status(400).json({msg: 'Artist not found'});
    
            res.json(artist);
    
        } catch (error) {
            serverError(error.message, res);
        }                
    };

    create = async (req, res) => {    
        
            try {
            const { name, bio, photoUrl } = req.body;
            
            if (!name || !bio || !photoUrl) 
                return res.status(400).json({msg: 'All fields are required'});
        
            const artist = await Artist.create({ name, bio, photoUrl })
        
            console.log('artists: ', artist)
        
            res.status(201).json(artist)
            
            } catch (error) {
                serverError(error.message, res);
            }        
        };

    update = async (req, res) => {    
        
        try {
            const id = parseInt(req.params.id);
    
            const {name, bio, photoUrl} = req.body;
    
            const artist = await Artist.findOne({ where: { id: id}})
            
            console.log('update: ', artist)
    
            if(!artist) return res.status(400).json({msg: 'Artist not found'})
                
            artist.set({
                name, 
                bio,
                photoUrl
            });

            await artist.save()

            res.json(artist);
    
        } catch (error) {
            serverError(error.message, res);
        }                
    };

    delete = async (req, res) => {
        try {
            const id = Number(req.params.id);
                    
            const artist = await Artist.findByPk(id);
        
            console.log(artist);
        
            if (!artist) return res.status(400).json({msg: "Artist not found"})
            
            await Artist.destroy({
                where: {id: id}
            })
            
            res.json(artist)
        
        } catch (error) {
            serverError(error.message, res);            
        }                
    };
}