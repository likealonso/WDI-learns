var Question = require('./../models/question')

function index (req, res) {
    console.log('work!!!!')
    Question.find({}).then(questions => (res.json(questions)) )
}

function addItem (req, res) {
    
}

function deleteItem (req, res) {
    
}

module.exports = {
    index
    
}