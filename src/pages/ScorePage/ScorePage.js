import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ScorePage.css';
import scoresAPI from '../../utils/scoresAPI';
import ScoresTable from '../../components/ScoresTable/ScoresTable'

class ScorePage extends Component {
  state = { scores: [] }

  componentDidMount() {
    scoresAPI.index()
    .then(scores => this.setState({scores}));
  }

  render() {
    return (
      <div className='TopScoresPage'>
        <header className="header-footer">Top Scores</header>
        <Link to='/unit'>RETURN</ Link><br />
        <ScoresTable scores={this.state.scores} />
      </div>
    );
  }
}

export default ScorePage;