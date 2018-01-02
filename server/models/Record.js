var mongoose = require('mongoose');
Schema = mongoose.Schema;

var uniqueValidator = require('mongoose-unique-validator');

var RecordSchema = new mongoose.Schema({
    monthandyear: { type: String, required: true },
    noofpersons: { type: Number, required: true },
    grocerry: { type: Number, required: true },
    commonexpenses: { type: Number, required: true },
    cooksalary: { type: Number, required: true },
    internet: { type: Number, required: true },
    oppshop: { type: Number, required: true },
    roomrent: { type: Number, required: true }
});

var Record = mongoose.model('Record', RecordSchema);
module.exports = Record;
