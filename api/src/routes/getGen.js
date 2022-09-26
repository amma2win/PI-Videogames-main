const { Router} = require ("express")
const {getAllGenres} = require ('./Controllers/getAllGenre');
const router = Router()


router.get('', getAllGenres);
// aca genero el middleware

module.exports = router;
