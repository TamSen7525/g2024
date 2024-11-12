var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* Главная страница*/
router.get('/cyberpunk-2077', function(req, res, next) {
  res.render('game',{
    title: "CYBERPUNK2077",
    picture: "images/cyberpunk-2077-back.png",
    desc: "Примерьте на себя роль киберпанка Ви и приложите все усилия, чтобы сделать себе имя среди наёмников мегаполиса Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Здесь рождаются легенды. Какую сложат о вас?"
  })
  });

/* Страница дополнения Phantom Liberty*/
router.get('/phantom-liberty', function(req, res, next) {
  res.render('game',{
    title: "PHANTOM LIBERTY",
    picture: "images/phantom-liberty-back.jpg",
    desc: "«Призрачная свобода» — это сюжетное дополнение, привносящее элементы шпионского триллера в игру Cyberpunk 2077. Вернитесь к роли кибернетически усовершенствованного наёмника Ви и станьте шпионом НСША, чтобы спасти саму главу государства. Найдите союзников в Пёсьем городе, самом опасном районе Найт-Сити, чтобы распутать клубок шпионских и политических интриг. Сможете ли вы выполнить задание, от которого зависит ваша жизнь?"
  })
  });

/* Страница сериала Edgerunners*/
router.get('/edgerunners', function(req, res, next) {
  res.render('game',{
    title: "EDGERUNNERS",
    picture: "images/edgerunners_back.jpg",
    desc: "Cyberpunk: Edgerunners — это самостоятельная десятисерийная история о дите улиц, который пытается выжить в одержимом имплантами и новыми технологиями городе будущего."
  })
  });
  