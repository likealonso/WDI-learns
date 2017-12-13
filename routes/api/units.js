var express = require('express');
var router = express.Router();
var unitsCtrl = require('../../controllers/units')

router.get('/', unitsCtrl.index);

module.exports = router