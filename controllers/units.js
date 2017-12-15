var Unit = require('./../models/unit')

function index (req, res) {
    console.log('work!!!!')
    Unit.find({}).sort({unitId: 1}).then(units => (res.json(units)) )
}

// .find({}).sort({unitId:1}).exec().then 

module.exports = {
    index
    
}

