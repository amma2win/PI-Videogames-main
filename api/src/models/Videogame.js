const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id :{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,// para que no choque con el id que viene desde la api
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
      type: DataTypes.TEXT(8)
    },
    rating: {
      type: DataTypes.DECIMAL(10,1),
      validate : {
        min:0,
        max:5
      }
    },
      platforms: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false
    },
    createdAtDb:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true 
    }
    
  },{timestamps : false});
};
/* DESCRIPCION
PLATAFORMAS */