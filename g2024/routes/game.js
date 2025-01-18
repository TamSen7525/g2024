var express = require('express');
var router = express.Router();
var Game = require('../models/cyberpunk');



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с game');
  });
  /* Страница черт характера */
  router.get("/:nick", async function(req, res, next) {
    var game = await Game.find({nick: req.params.nick});
    console.log(game)
    if(!game.length) return next(new Error("Нет такой игры в списке"))
    var game = games[0];
    res.render('game', {
    title: game.title,
    picture: game.avatar,
    desc: game.desc
    })
    });
    



    
module.exports = router;
