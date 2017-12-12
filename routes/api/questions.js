var express = require('express');
var router = express.Router();
var questionsCtrl = require('../../controllers/questions')

router.get('/', questionsCtrl.index);

module.exports = router