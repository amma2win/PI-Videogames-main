const { Router} = require ("express")
const { getById}  = require ('./Controllers/getAllVg');
const router = Router()

router.get('/:id', async (req,res)=>{
    const {id} = req.params
   try{
    let vgamesTotal = await getById(id)
    res.status(200).json(vgamesTotal)
    }catch(e){
        res.status(404).send(console.log(e))
    }
})




module.exports = router ;