var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Choice = require('./choice');

var questionSchema = new Schema({
    unitId: Number,
    text: Text,
    choices: [{type: Schema.Objectid, ref: 'Choice'}]

})

module.exports = mongoose.model('Question', questionSchema);