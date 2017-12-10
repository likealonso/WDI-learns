var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Question = require('./question');

var unitSchema = new Schema({
    unitId: Number,
    questions: [{type: Schema.ObjectId, ref: 'Question'}]
})

module.exports = mongoose.model('Unit', unitSchema);