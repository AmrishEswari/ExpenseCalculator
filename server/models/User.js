var mongoose = require('mongoose');
Schema = mongoose.Schema;

var uniqueValidator = require('mongoose-unique-validator');

var testuserschema = new mongoose.Schema({
    name: { type: String },
    singleexpenses: { type: String },
    commonexpense: { type: Number },
    amounttogiven: { type: String },
    monthandyear: { type: String },
});

var UserSchema = new mongoose.Schema({   
    individualexpensedetails: [testuserschema]
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
