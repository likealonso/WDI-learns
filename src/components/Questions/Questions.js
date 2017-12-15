import React from 'react';
import Question from './../Question/Question';


const Questions = (props) => {    
    if (props.unit) {
    console.log(props.unit.questions)
    }
    return (
        <div style={{border:'1px red solid', textAlign:'left'}} className="col-xs-12 col-sm-12 col-md-12">
            {props.unit && props.unit.questions.slice(0,3).map(question => <Question
                key={question.questionId}
                question={question}
                handleAnswer={props.handleAnswer}
                />)}
        </div>
    );
}
// sort(function() {
//     return .5 - Math.random();
//     })

export default Questions

// { currentUnit.questions ? currentUnit.questions.map((question, elIdx) => 
//     <li key={elIdx}>{question.text}<br/>{question.choices.map((choice, choIdx) => <p>{choice.choiceId}) {choice.text}</p>)}</li>)
//     : <h1>Loading</h1> }
    {/* TODO: Write this */}

// <div>
//     <h1>Welcome to unit {currentUnit.unitId}</h1>

// </div>