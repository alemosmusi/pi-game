const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
// const { UUID } = require('uuid');





// [ ] Videojuego con las siguientes propiedades:
// ID: * No puede ser un ID de un videojuego ya existente en la API rawg
// "id": 58175,
// Nombre *
// "name": "God of War",
// Descripción *
// "description": "<p>Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. <br />\nSimultaneous storytelling from three unique perspectives: <br />\nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. <br />\nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.</p>",
// Fecha de lanzamiento
// "released": "2013-09-17",
// Rating
// "rating": 4.48,
// Plataformas *
// "metacritic_platforms": [
// [ ] Genero con las siguientes propiedades:
// ID
// Nombre


// [ 'Action', 'Indie', 'Adventure', 'RPG', 'Strategy', 'Shooter', 'Casual', 'Simulation', 'Puzzle', 'Arcade', 'Platformer', 'Racing', 'Massively Multiplayer', 'Sports', 'Fighting', 'Family', 'Board Games', 'Educational', 'Card' ]

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value){
        this.setDataValue('name', value.toLowerCase())
      }
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    released:{
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
    background_image: {
      type: DataTypes.TEXT
    },    
    rating:{
      type: DataTypes.DECIMAL,
      validate: {
        min:0,
        max: 5,
        isEven(value){
          if(value > 5){
            throw new Error ('valor maximo en rating es 5')
          }
        }
      },
      defaultValue: 0,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false
    },
    // genres: {
    //   type: DataTypes.ARRAY(DataTypes.TEXT),
    // },
    
  });
};
