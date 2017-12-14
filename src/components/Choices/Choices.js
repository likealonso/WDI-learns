import React from 'react'

const Choices = ({choices, questionId, handleAnswer}) => {
    let labels = ['A', 'B', 'C', 'D', 'E', 'F'];
    let options = choices.map((choice, idx) => (
        <p style={{border:'1px red solid', textAlign:'left', fontWeight:'bold'}} className="col-xs-12 col-sm-12 col-md-12">
            <span>{labels[idx]}) </span>
            <span className="option">{choice}</span>
            <input type="radio" defaultValue={idx} name={questionId} onChange={(e) => handleAnswer(e)}/>
        </p>
    ));
    
    return <div>{options}</div>
}

export default Choices;