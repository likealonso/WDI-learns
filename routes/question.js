var express = require('express');
var router = express.Router();
var questionsCtrl = require('./../controllers/questions')

router.get('/unit/1', questionsCtrl.index);

module.exports = router