//const axios = require ("axios");
const {Genre,Videogame} = require ('../../db');




const postVideoGames = async(req, res) =>{
    // traigo data del body
    const  { name, description, rating, platform, createdAtDb, genre} = req.body
    try {
      
      if (!name || !description || !platform){
        res.status(400).send('Faltan datos en el body !')
      }
      const newVideogame = await Videogame.create({
        name,
        description,
        rating,
        platform,
        createdAtDb, 
      });

      let genreDb = await Genre.findAll({
        where: { name: genre }});
       await newVideogame.addGenre(genreDb)
       res.status(201).send('Videogame Creado');
      }catch(e){
        res.status(404).send(console.log(e))
      }}
     
      
 
      
  
module.exports= {
    postVideoGames
}