var Question = require('./../models/question')

function index (req, res) {
    //console.log('work!!!!')
    Question.find({}).then(questions => (res.json(questions)) )
}

module.exports = {
    index
}

