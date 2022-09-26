const { Router} = require ("express")
const {getAllVideoGames} = require ('./Controllers/getAllVg');
const router = Router()



router.get('', getAllVideoGames);
// aca genero el middleware

module.exports = router;
