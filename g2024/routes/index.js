var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* Главная страница*/
router.get('/cyberpunk-2077', function(req, res, next) {
  res.send("<h1>CYBERPUNK 2077</h1>")
  });

/* Страница дополнения Phantom Liberty*/
router.get('/phantom-liberty', function(req, res, next) {
  res.send("<h1>PHANTOM LIBERTY</h1>")
  });

/* Страница сериала Edgerunners*/
router.get('/edgerunners', function(req, res, next) {
  res.send("<h1>EDGERUNNERS</h1>")
  });