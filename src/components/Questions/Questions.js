import React from 'react';
import Question from './../Question/Question';


const Questions = (props) => {    
    return (
        <div style={{border:'1px red solid', textAlign:'left'}} className="col-xs-12 col-sm-12 col-md-12">
            {props.unit && props.unit.questions.map(question => <Question
                question={question}
                handleAnswer={props.handleAnswer}
                />)}
        </div>
    );
}

export default Questions

// { currentUnit.questions ? currentUnit.questions.map((question, elIdx) => 
//     <li key={elIdx}>{question.text}<br/>{question.choices.map((choice, choIdx) => <p>{choice.choiceId}) {choice.text}</p>)}</li>)
//     : <h1>Loading</h1> }
    {/* TODO: Write this */}

// <div>
//     <h1>Welcome to unit {currentUnit.unitId}</h1>

// </div>