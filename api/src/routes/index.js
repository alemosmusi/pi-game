const { Router } = require('express');
const morgan = require('morgan');
const { videogame } = require('../models/Videogame.js')
const { conn , Videogame , Genres } = require('../db.js')
const { Op } = require('sequelize');
const axios = require('axios');
const Genr = require('../models/Genres.js');
const {
  API_KEY,
} = process.env;


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/creategame', async function(req, res){
    const {name, description, released, rating, platforms, background_image, genres} = req.body
    try {
        const newGame = await Videogame.create({
            name,
            description, 
            released, 
            rating, 
            platforms,
            background_image,
        })
        genres.forEach(async (g) => {
          let genre = await Genres.findOne({
            where: {
              name: g
            }
          })
          newGame.addGenres(genre)
        });
        res.status(201).json(newGame)
      } catch (error) {
        res.status(400).json({error:error})
      }
  })

  router.post('/creategenres', async function(req, res){
    // let id = [ 4, 51, 3, 5, 10, 2, 40, 14, 7, 11, 83, 1, 59, 15, 6, 19, 28, 34, 17 ];
    // let name = [ 'action', 'indie', 'adventure', 'role-playing-games-rpg', 'strategy', 'shooter', 'casual', 'simulation', 'puzzle', 'arcade', 'platformer', 'racing', 'massively-multiplayer', 'sports', 'fighting', 'family', 'board-games', 'educational', 'card' ]
    const {name, id} = req.body
    
      try {
        const newGenres = await Genres.create({
            id: id,
            name: name, 

        })
        res.status(201).json(newGenres)
      } catch (error) {
        res.status(400).json({error:error})
      }
    
    
  })


router.get('/creategame', async function(req, res){
  try {
    
    const creategame = await Videogame.findAll()
    
    res.json(creategame)
  } catch (error) {
    res.status(400).json({error:error})
    
  }
})
router.get('/', async (req,res)=>{
  try {
    var juegosApi=[]
    for (let index = 1; index < 6; index++) {
      let apiGame = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${index}`);
      results = apiGame.data.results;
     
      juegosApi = juegosApi.concat(results)
     
    }
    let filterCharacters = juegosApi.map((x) => {
      return {
        id: x.id, //uuidv4()
        name: x.name,
        released: x.released,
        image: x.background_image,
        rating: x.rating,
        description: x.slug,
        // Ingenioso esto no?
        genres: x.genres.map((z) => z),
        platforms: x.platforms.map((z) => z.platform.slug)
        
      };})
    const creategame = await Videogame.findAll(
      {
        include: [{
            model: Genres,
            as: 'genres',
            attributes: ['id', 'name']
        }]
    }
    )
    // juegosApi = juegosApi.concat(creategame)
    let allVideogames = [...creategame, ...filterCharacters];
    res.json(allVideogames);
  } catch (error) {
    res.status(400).json({error:error})
    
  }
  
    
})

router.get('/search', async (req,res)=>{
  const { game } = req.query
  try {
      var searchJuegos = []
      // https://api.rawg.io/api/games?key=30ec9411e72d4d5c939a3dbf95b9fa21&page=2&search=age
      // let searchGame = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${game}`);
      // let results = searchGame.data.results;
      // searchJuegos = searchJuegos.concat(results)
     
    
    const creategame = await Videogame.findAll({
      where:{
        name: {[Op.substring]:`%${game.toLocaleLowerCase()}`},
      }
    })
    searchJuegos = searchJuegos.concat(creategame)
    res.json(searchJuegos);
  } catch (error) {
    res.status(400).json({error:error})
    
  }
  
    
})

// https://api.rawg.io/api/games?search={game}







module.exports = router;
