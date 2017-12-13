var Unit = require('./../models/Unit')

function index (req, res) {
    console.log('work!!!!')
    Unit.find({}).then(units => (res.json(units)) )
}

// .find({}).sort({unitId:1}).exec().then 

module.exports = {
    index
    
}

