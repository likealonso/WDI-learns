import React from 'react'

const Choices = ({choices, questionId, handleAnswer}) => {
    let labels = ['A', 'B', 'C', 'D', 'E', 'F'];
    let options = choices.map((choice, idx) => (
        <p>
            <span>{labels[idx]}) </span>
            <span className="option">{choice}</span>
            <input type="radio" defaultValue={idx} name={questionId} onChange={(e) => handleAnswer(e)}/>
        </p>
    ));
    
    return <div>{options}</div>
}

export default Choices;