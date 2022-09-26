const { Router } = require('express');
const router = Router();
const videoMiddle = require ('./getV')
const genreMiddle = require ('./getGen')
const postVideoMiddle = require ('./postVideoGames')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




router.use('/videogames',postVideoMiddle);
router.use('/genres', genreMiddle);
router.use('/videogames', videoMiddle);

















module.exports = router;
