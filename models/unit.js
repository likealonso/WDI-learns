var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
    questionId: Number,
    text: String,
    choices: [String],
    correctIdx: Number
})

var unitSchema = new Schema({
    unitId: Number,
    questions: [questionSchema]
})

module.exports = mongoose.model('Unit', unitSchema);