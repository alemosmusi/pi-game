const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('Platforms', {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value){
        this.setDataValue('name', value.toLowerCase())
      }
    },
  });

  
};