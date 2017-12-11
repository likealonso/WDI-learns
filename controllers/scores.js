const bogusScores = [
    {player: 'Nedim', score: "10/10"},
    {player: 'Mike C', score: "9/10"},
    {player: 'Jon', score: "6/10"}
  ];
  
  function index(req, res) {
    console.log(req.user)
    res.json(bogusScores);
  }
  
  module.exports = {
    index
  };