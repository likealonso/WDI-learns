var Unit = require('./../models/unit')

function index (req, res) {
    Unit.find({}).sort({unitId: 1}).then(units => (res.json(units)) )
}
// .find({}).sort({unitId:1}).exec().then 
module.exports = {
    index  
}