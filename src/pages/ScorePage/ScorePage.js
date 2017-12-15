import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ScorePage.css';
import scoresAPI from '../../utils/scoresAPI';
import ScoresTable from '../../components/ScoresTable/ScoresTable'

const ScorePage = (props) => {
    // const scoreRows = props.scores.map((score, idx) => (
    //   <tr key={idx}>
    //     <td><span className="badge">{idx + 1}</span></td>
    //     <td>{score.initials}</td>
    //     <td>{score.numGuesses}</td>
    //     <td>{score.seconds}</td>
    //   </tr>
    // ));

    // componentDidMount() {
    //   fetch('/api/highscores').then(res => res.json())
    //   .then(scores => {
    //     this.setState({scores});
    //   });
    // }
    
  
    return (
      <div>
      <br/>
      <h4>This is your score: {props.score}</h4>
      </div>
      // <div className='HighScores'>
      //   <header className='header-footer'>High Scores</header>
      //   {props.scores.length ? 
      //     <table className="table HighScores-table text-info">
      //       <thead>
      //         <tr><th width={80}>#</th><th width={100}>Initials</th><th width={100}>Guesses</th><th>Seconds</th></tr>
      //       </thead>
      //       <tbody>
      //         {scoreRows}
      //       </tbody>
      //     </table>
      //     :
      //     <h4 className='text-info'>No High Scores Yet</h4>
      //   }
      //   <div>
      //     <Link className='HighScores-cancel btn btn-default btn-sm' to='/' style={{marginTop: 40}}>Back to Tests</Link>
      //   </div>
      // </div>
    );
  };

//   state = { scores: [] }

//   componentDidMount() {
//     scoresAPI.index()
//     .then(scores => this.setState({scores}));
//   }

//   render() {
//     return (
//       <div className='TopScoresPage'>
//         <header className="header-footer">Top Scores</header>
//         <Link to='/unit'>RETURN</ Link><br />
//         <ScoresTable scores={this.state.scores} />
//       </div>
//     );
//   }
// }

export default ScorePage;


// this.state ={
//   movie: props.movie
// }
// <div>
// this.state.movie.name
// </div>