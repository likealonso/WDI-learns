import React from 'react';
import Choices from './../Choices/Choices';

const Question = ({question, handleAnswer, answer, showAnswers}) => {
    let backgroundColor = '';
    let color = ''
    if (answer.correct && showAnswers) {
        backgroundColor = '#00B300'
        color = 'white'
    }
    else if (!answer.correct && showAnswers) {
        backgroundColor = 'red'
        color= 'white'
    }
    
    return (
        <div style={{border:"black 0.5px dotted", margin:"0 0 15px 0", padding: "20px 40px", textAlign:'center', backgroundColor: backgroundColor, color: color}} 
        className="col-xs-12 col-sm-12 col-md-12">
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