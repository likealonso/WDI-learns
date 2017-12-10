var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var choiceSchema = new Schema({
    questionId: Number,
    text: String,
    correct: Boolean

})

module.exports = mongoose.model('Choice', choiceSchema);