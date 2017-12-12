var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scoreSchema = new Schema({
    name: String,
    score: Number
}, {
    timestamps: true
});

scoreSchema.pre('save', function(next) {
    var name = this.name;
    this.name = name.substr(0,6).toUpperCase();
    next();
})

module.exports = mongoose.model('Score', scoreSchema);