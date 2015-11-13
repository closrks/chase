var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var options = {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
};

// https://en.wikipedia.org/wiki/Portable_Game_Notation
// 10 dice on a 9x9 wrap around
// dice[0-9]src[a-z1-9]dest[a-z1-9]
var GameSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    player1: String,
    player2: String,
    pgn: String,
    result: String
}, options);

module.exports = GameSchema;
