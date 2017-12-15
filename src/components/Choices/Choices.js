import React from 'react'

const Choices = ({choices, questionId, handleAnswer}) => {
    let labels = ['A', 'B', 'C', 'D', 'E', 'F'];
    let options = choices.map((choice, idx) => (
        <p key={choice} style={{textAlign:'left', fontWeight:'bold'}} >
            <input style={{height:20, width: 20 }} type="radio" defaultValue={idx} name={questionId} onChange={(e) => handleAnswer(e)}/>
            <span >&nbsp;&nbsp;{labels[idx]}) </span>
            <span className="option">{choice}</span>
        </p>
    ));
    
    return <div>{options}</div>
}

export default Choices;