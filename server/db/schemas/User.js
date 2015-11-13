var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var options = {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
};

var UserSchema = new Schema({
    name: String,
    email: String,
    password: String
}, options);

module.exports = UserSchema;
