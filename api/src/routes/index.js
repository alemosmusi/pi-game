const { Router } = require('express');
const morgan = require('morgan');
const { videogame } = require('../models/Videogame.js')
const { conn , Videogame , Genres } = require('../db.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/creategame', async function(req, res){
    const {name, description, released, rating, platforms} = req.body
    try {
        const newGame = await Videogame.create({
            name,
            description, 
            released, 
            rating, 
            platforms
        })
        res.status(201).json(newGame)
      } catch (error) {
        res.send("no funciona")
      }
  })

//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   description:{
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
//   released:{
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//   },
//   rating:{
//     type: DataTypes.DECIMAL,
//     defaultValue: 0,
//   },
//   platforms:{
//     type: DataTypes.JSON,
//   }







module.exports = router;
