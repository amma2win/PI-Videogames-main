// Importar todos los routers;
const { Router } = require('express');
const router = Router();
const videoMiddle = require ('./getV')
const genreMiddle = require ('./getGen')
const postVideoMiddle = require ('./postVideoGames')
const elIdMiddle = require ('./getById')



// Configurar los routers
router.use('/videogame',elIdMiddle);
router.use('/videogames',postVideoMiddle);
router.use('/genres', genreMiddle);
router.use('/videogames', videoMiddle);
router.use('/platforms',genreMiddle)

















module.exports = router;
