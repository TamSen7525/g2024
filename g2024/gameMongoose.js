const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/gameMongoose2024');
var schema = mongoose.Schema({ name: String })

schema.methods.g = function(){
    console.log(this.name + " Класс!")}

const game = mongoose.model('game', schema);

const games = new game({ name: 'cyberpunk' });
games.save().then(() => games.g());

