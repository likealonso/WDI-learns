import React from 'react';

const ScoresTable = (props) => {
  return (
    <table className='table table-striped' style={{width: 200}}>
      <thead>
        <tr>
          <th>Player</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {props.scores.map(score => 
          <tr key={score.player}>
            <td style={{textAlign:'left'}}>{score.player}</td>
            <td style={{textAlign:'left'}}>{score.score}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ScoresTable;