import React from 'react';
import Choices from './../Choices/Choices';

const Question = ({question, handleAnswer}) => (
    <div>
        <h2>{question.text}</h2>
        <Choices
            choices={question.choices}
            questionId={question.questionId}
            handleAnswer={handleAnswer}
        />
    </div>
);

export default Question;