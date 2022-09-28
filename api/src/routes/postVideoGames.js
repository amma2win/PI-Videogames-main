const { Router } = require ('express');
const router = Router()
const {postVideoGames} = require ('./Controllers/postVideoGame')

router.post('',postVideoGames)

module.exports= router;