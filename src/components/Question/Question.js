import React from 'react';
import Choices from './../Choices/Choices';

const Question = ({question, handleAnswer, answer, showAnswers}) => {
    let backgroundColor = '';
    let color = ''
    if (answer.correct && showAnswers) {
        backgroundColor = 'green'
        color = 'white'
    }
    else if (!answer.correct && showAnswers) {
        backgroundColor = 'red'
        color= 'white'
    }
    
    return (
        <div style={{border:'1px red solid', textAlign:'left', backgroundColor: backgroundColor, color: color}} className="col-xs-12 col-sm-12 col-md-12">
            <h4>{question.text}</h4>
            <Choices
                choices={question.choices}
                questionId={question.questionId}
                handleAnswer={handleAnswer}
            />
        </div>
    )
};

export default Question;