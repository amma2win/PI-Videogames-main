const axios = require ("axios");
const {Genre,Videogame} = require ('../../db.js');




const postVideoGames = async (req,res) =>{
    const {
        name,description,released,rating, platforms,genres} = req.body;
    
   

    
    if(!name || !description || !platforms){
        return res.status(400).send("Faltan parametros en el body! ;)")
    }
    const vgFind = await Videogame.findAll({
        where :{
            name: name
        }
    });
    if(!vgFind.length !=0){
        return res.send("El nombre ya esta en uso")
    }
    let vgCreator = await Videogame.findOrCreate({
     where : {name,
        description,
        released,
        rating,
        platforms: platforms.toString(),}
        
    })
    const genreDb = await Genre.findAll({
        where:{
            name: genres,
        },
    })
    vgCreator.addGenre(genreDb)
    res.send("El VideoGame fue creado con exito!")
}


module.exports= {
    postVideoGames
}