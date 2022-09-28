const { Router } = require ("express")
const { getAllinfo } = require ('./Controllers/getAllVg');
const axios = require ('axios');

const router = Router()



router.get('', async (req,res)=>{
    const{ name } = req.query;  // si me pasan name por query
    const vgTotal = await getAllinfo()
  
        if(name) {
            let vgName = await vgTotal.filter(e =>e.name.toLowerCase().includes(name.toLowerCase()));
            vgName.length ?
            res.status(200).send(vgName) :
            res.status(404).send("Videogame Not Found")
        }else{
            res.status(200).send(vgTotal)
        }

   
});

// aca genero el middleware

module.exports = router;
