const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/gameMongoose2024');

const game = mongoose.model('game', { name: String });

const games = new game({ name: 'cyberpunk' });
games.save().then(() => console.log('cyberpunk'));