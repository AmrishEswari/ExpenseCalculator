var mongoose = require('mongoose');
Schema = mongoose.Schema;

var uniqueValidator = require('mongoose-unique-validator');

var LoginSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, default: 'welcome123' }
});

var Login = mongoose.model('Login', LoginSchema);
module.exports = Login;

