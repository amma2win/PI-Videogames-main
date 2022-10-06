const axios = require ("axios");
const {Genre} = require ('../../db.js')
const { apiKey } = process.env;



const getAllGenres = async(_req,res) => {

try{
    const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${apiKey}&ordering=id`);
    const genres = await genresApi.data.results.map(e => e.name)
 
    

    genres.forEach(e => Genre.findOrCreate({ //lo uso para guardar los generos que me traje de la API a la base de datos
        where: {name: e } // en el caso de genres solamente queremos buscar x su name , por eso no le defino un id en su modelo.
    }))

    const allGenres = await Genre.findAll() //me traigo todos los generos que guarde en mi db
    res.status(200).send(allGenres)

}catch(e){
    res.status(404).send(e)

}



   
}
module.exports = { getAllGenres }