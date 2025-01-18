// models/cyberpunk.js  
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
    title: String,
    nick: {
        type: String,
        unique: true,
        required: true,
    },
    avatar: String,
    desc: String,
    created: {
        type: Date,
        default: Date.now,
    },
});

// Экспорт модели напрямую
module.exports = mongoose.model('Game', gameSchema);
