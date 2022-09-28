const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo el ID, NOMBRE,DESCRIPTION Y PLATFORM NO PUEDEN FALTAR POR ESO EL ALLOWNULL
  sequelize.define('videogame', {
    id :{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,// para que no choque con el id que viene desde la api
      allowNull: false,
      primaryKey: true,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    released:{
      type: DataTypes.STRING

    },
  
  
    rating: {
      type: DataTypes.DECIMAL(10,1),
      validate : {
        min:0,
        max:5
      }
    },
      platform: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAtDb:{
      type: DataTypes.BOOLEAN,
      defaultValue: true 
    }
    
  },{timestamps : false});
};
/* DESCRIPCION
PLATAFORMAS */