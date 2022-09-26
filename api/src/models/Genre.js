const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  return sequelize.define('genre', {
      // Ahora que lo pienso, no es necesario un ID. Si total vamos a pasar los géneros por ID
  
      // Name del género.
      name: { 
          type: DataTypes.STRING,
          allowNull: false
      },
      
  },{timestamps : false});
}