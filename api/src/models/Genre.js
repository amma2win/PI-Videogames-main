const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  return sequelize.define('genre', {
      
  //no hace falta pasarle ID ??
      // Name del género.
      name: { 
          type: DataTypes.STRING,
          /* allowNull: false, */

      },
   
  },{timestamps : false});
}