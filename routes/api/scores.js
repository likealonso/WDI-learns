var express = require('express');
var router = express.Router();
var scoresCtrl = require('../../controllers/scores');

/*---------- Protected Routes ----------*/

// TODO: Protect this route with custom middleware
router.get('/', checkAuth, scoresCtrl.highScores);
router.post('/', scoresCtrl.create);

module.exports = router;

function checkAuth(req, res, next) {
    if (req.user) return next();
   return res.status(401).json({err:'not authorized'}) 
  }