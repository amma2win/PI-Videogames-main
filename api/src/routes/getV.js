const { Router } = require ("express")
const { getAllinfo } = require ('./Controllers/getAllVg');


const router = Router()





// dejemoslo, asi.. no puedo modularizar esto ... why??

router.get('', async (req,res)=>{
    const{ name } = req.query;  // si me pasan name por query
    const vgTotal = await getAllinfo()
  
        if(name) {
            let vgName = await vgTotal.filter(e =>e.name.toLowerCase().includes(name.toLowerCase())); //le mandamos include para hacer la busqueda mas globar ;)
            vgName.length ?
            res.status(200).send(vgName) :
            res.status(404).send("Videogame Not Found")
        }else{
            res.status(200).send(vgTotal)
        }

   
});



module.exports = router;
