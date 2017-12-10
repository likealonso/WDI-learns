var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Choice = require('./choice');

var questionSchema = new Schema({
    unitId: Number,
    text: String,
    choices: [{type: Schema.ObjectId, ref: 'Choice'}]

})

module.exports = mongoose.model('Question', questionSchema);