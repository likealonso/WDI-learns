var Score = require('../models/score');

module.exports = {
    create,
    highScores
};

function create(req, res) {
    console.log('req.user =', req.user)
    // get name from req.user.name?

    const newScore = req.body
    // newScore.name = req.user.name // ?

    Score.create(newScore)
    .then(score => {
        res.json(score);
    });
}

function highScores(req, res) {
    Score.find({})
    .sort({score: 10})
    .limit(req.query.limit || 20)
    .then(scores => {
        res.json(scores);
    });
}


// const bogusScores = [
//     {player: 'Nedim', score: "10/10"},
//     {player: 'Mike C', score: "9/10"},
//     {player: 'Jon', score: "6/10"}
//   ];
  
//   function index(req, res) {
//     console.log(req.user)
//     res.json(bogusScores);
//   }

//   function create(req, res) {

//   }
  
  module.exports = {
    highScores,
    create
  };