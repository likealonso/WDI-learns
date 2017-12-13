var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var choiceSchema = new Schema({
    choiceId: String,
    text: String,
    correct: Boolean
})

var questionSchema = new Schema({
    questionId: Number,
    text: String,
    choices: [choiceSchema]
})

var unitSchema = new Schema({
    unitId: Number,
    questions: [questionSchema]
})

module.exports = mongoose.model('Unit', unitSchema);