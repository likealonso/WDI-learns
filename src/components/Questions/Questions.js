import React from 'react';
import Question from './../Question/Question';


const Questions = (props) => {    
    if (props.unit) {
    //console.log(props.unit.questions)
    }
    return (
        <div>
            {props.unit && props.unit.questions.slice(0,10).map(question => 
                <Question
                    key={question.questionId}
                    question={question}
                    handleAnswer={props.handleAnswer}
                    answer={props.answers.filter(answer => answer.questionId === question.questionId)[0]}
                    showAnswers={props.showAnswers}
                />
            )}
        </div>
    );
}


export default Questions