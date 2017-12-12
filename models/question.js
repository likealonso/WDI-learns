var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Choice = require('./choice');

var choiceSchema = new Schema({
    choiceId: String,
    text: String,
    correct: Boolean
})

var questionSchema = new Schema({
    unitId: Number,
    questionId: Number,
    text: String,
    choices: [choiceSchema]
    // choices: [{type: Schema.ObjectId, ref: 'Choice'}]

})

module.exports = mongoose.model('Question', questionSchema);