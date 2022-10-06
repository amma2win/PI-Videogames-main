const { Router} = require ("express")
const {getAllGenres} = require ('./Controllers/getAllGenre');
const router = Router()
const {getPlatformApi} = require ('./Controllers/getAllVg')


router.get('', getAllGenres);
router.get('',getPlatformApi)
// aca genero el middleware

module.exports = router;
