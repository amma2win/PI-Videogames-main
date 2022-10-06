const axios = require ('axios');
const {Videogame, Genre } = require('../../db');
const { apiKey } = process.env;




    
    const getVideoApi = async ()=> {
        const apiInfo = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page_size=40`) // me limita hasta 40..
        const infoVideo = await apiInfo.data.results.map((e)=>{
            return {
                id: e.id,
                name: e.name,
                genres: e.genres.map(e=> e.name).join(', '),
                img: e.background_image,
                description: e.description,
                released: e.released,
                rating: e.rating,
                platforms: e.platforms.map((e) => e.platform.name).join(', '),//le hago un mapeo a plataform por nombre y uno los elementos con el join. si no me trae demasiada info!!
                /* createdAtDb: e.createdAtDb */
            };
        });
        return infoVideo;// aca devuelvo todo lo que le solicite arriba a la api
    };
    const getVideoDb = async () =>{
        return await Videogame.findAll({
            include: {
                model: Genre,
                attributes: ["name"],
                through : {
                    attributes: [],
                }
            }
        })
    };
    
    const getAllinfo = async () => {
        const videoApi = await getVideoApi();
         const videoDb = await getVideoDb();
         const totalVideos = videoApi.concat(videoDb);
         return totalVideos;
     };

    const getById = async (id) => {
    try{
        const apiVideo = await axios( `https://api.rawg.io/api/games/${id}?key=${apiKey}`);
        const data = await apiVideo.data;
        const dataVideo ={
            id: data.id,
            name: data.name,
            description: data.description,
            released: data.released,
            rating: data.rating,
            platforms: data.platforms.map((e) => e.platform.name).join(', '),
            img: data.background_image,
            genres: data.genres.map((e) => e.name)
        }
        return dataVideo

    }catch(e){
        console.log(e)
    }
    }

    const getPlatformApi =async (req,res) =>{
        try {
         const apiInfo= await axios.get(`https://api.rawg.io/api/platforms/lists/parents?key=${apiKey}`)
         const platApi = await apiInfo.data.results.map(p = p.name)
         res.status(200).send(platApi)
     }catch(e){
         res.status(400).send(console.log(e))
     
     }
     }
 module.exports = {
                    getVideoDb,
                    getAllinfo,
                    getVideoApi,
                    getById,
                    getPlatformApi
                    }