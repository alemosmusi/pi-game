const { Router } = require('express');
const morgan = require('morgan');
const { videogame } = require('../models/Videogame.js')
const { Videogame , Genres, Platforms } = require('../db.js')
const { Op, UUID } = require('sequelize');
const axios = require('axios');
// const Platforms = require('../models/Platforms.js');
// const Genr = require('../models/Genres.js');
// const Platforms = require('../models/Platforms.js');
const {
  API_KEY,
} = process.env;


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/creategame', async function(req, res){
    const {name, description, released, rating, platforms, image, genres} = req.body
    try {
        const newGame = await Videogame.create({
            name,
            description, 
            released, 
            rating, 
            platforms,
            image,
        })
        genres.forEach(async (g) => {
          let genre = await Genres.findOne({
            where: {
              name: g
            }
          })
          newGame.addGenres(genre)
        });
        platforms.forEach(async (p) => {
          let plat = await Platforms.findOne({
            where: {
              name: p
            }
          })
          newGame.addPlatforms(plat)
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

  router.post('/platforms', async function(req, res){
    
      try {
          const newPlatforms = await Platforms.bulkCreate(req.body)
        res.status(201).json(newPlatforms)
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
        id: x.id, 
        name: x.name,
        released: x.released,
        image: x.background_image,
        rating: x.rating,
        description: x.slug,
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




router.get('/gamescreated', async (req,res)=>{
  try {
    
    const creategame = await Videogame.findAll(
      {
        include: [{
            model: Genres,
            as: 'genres',
            attributes: ['id', 'name']
        }]
    }
    )
    res.json(creategame);
  } catch (error) {
    res.status(400).json({error})
    
  }
  
    
})








router.get('/search', async (req,res)=>{
  const { game } = req.query
  try {
      var searchJuegos = []
      // https://api.rawg.io/api/games?key=30ec9411e72d4d5c939a3dbf95b9fa21&page=2&search=age
      let searchGame = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${game}`);
      let results = searchGame.data.results;
      searchJuegos = searchJuegos.concat(results)
     
    
    const creategame = await Videogame.findAll({
      where:{
        name: {[Op.substring]:`%${game.toLocaleLowerCase()}`},
        include: [{
          model: Genres,
          as: 'genres',
          attributes: ['id', 'name']
      }]
      }
    })
    searchJuegos = searchJuegos.concat(creategame)
    res.json(searchJuegos);
  } catch (error) {
    res.status(400).json({error:error})
    
  }
  
    
})

router.get('/videogame/', async (req,res)=>{
  const { id } = req.query
  try {
    if(id.includes("-")){
      const creategame = await Videogame.findByPk(id,{
        
          include: [{
            model: Genres,
            as: 'genres',
            attributes: ['id', 'name']
        },
        {
          model: Platforms,
          as: 'Platforms',
          attributes: ['id', 'name']
      }
      ]
              
      })
      res.json(creategame);
    }else{
      const searchGameId = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
      res.json(searchGameId.data);
    }
    
    
    
      // if(searchGameId.name){
      //   res.json(searchGameId);
      // }else{
      //   const creategame = await Videogame.findOne({
      //     where:{
      //       id: id,
      //     }
      //   })
    
      // }
      

  } catch (error) {
    res.status(400).json({error:error})
    
  }
  
    
})




router.delete('/deletegame', async (req, res) => {
  
  const  {id}  = req.query;
  try {
    const elim = await Videogame.destroy({ where: { id: id } });
    res.status(201).json(elim)
  } catch (error) {
    res.status(400).json({error:error})
  }
  
});



// https://api.rawg.io/api/games?search={game}







module.exports = router;
