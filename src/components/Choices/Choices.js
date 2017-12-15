import React from 'react'

const Choices = ({choices, questionId, handleAnswer}) => {
    let labels = ['A', 'B', 'C', 'D', 'E', 'F'];
    let options = choices.map((choice, idx) => (
        <p key={choice} style={{border:'1px red solid', textAlign:'left', fontWeight:'bold'}} className="col-xs-12 col-sm-12 col-md-12">
            <span >{labels[idx]}) </span>
            <span className="option">{choice}&nbsp;&nbsp;</span>
            <input style={{height:20, width: 20 }} type="radio" defaultValue={idx} name={questionId} onChange={(e) => handleAnswer(e)}/>
        </p>
    ));
    
    return <div>{options}</div>
}

export default Choices;