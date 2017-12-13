import React from 'react';

const Questions = (props) => {
    let uni1 = props.questions;

    return (
        <div>
            <h3>This is the first unit</h3>
            {uni1.map( (el, elIdx) => 
                <div key={el._id}>{el.text}<br/>{el.choices.map((arr, arrIdx) => 
                <label key={arr._id}>
                <input type="checkbox" onClick={() => props.onAnswering()} />
                
               <p>{arr.choiceId}) {arr.text}&nbsp;&nbsp;&nbsp;</p></label> )}</div>)}
               
            <br/>
        </div>
    )
    // else {return 'LOADING'}
}

export default Questions
