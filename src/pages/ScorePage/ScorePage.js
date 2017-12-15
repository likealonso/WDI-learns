import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ScorePage.css';
import ScoresTable from '../../components/ScoresTable/ScoresTable'

const ScorePage = (props) => {  
    return (
      <div>
        <br/>
        <h2>This is your score: {props.score}</h2>
        <br/>
        <div style={{fontSize: 30}}><Link to='/units'>Try Another Quiz!</Link></div>
      </div>
    )
}

export default ScorePage;