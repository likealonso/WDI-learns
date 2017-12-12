import React from 'react';

const Questions = (props) => {
    if (props.questions) {
    let a = props.questions.filter(function(el) {
        return el.unitId === 1
    }) 
    return (
        <div>
            <h3>This is the first unit</h3>
            <button onClick={()=> props.handleQuestions()}>Press me</button>
                
            {a.map( (el, elIdx) => 
            <p key={elIdx}><h1>{el.text}</h1><br/>{el.choices.map((arr, arrIdx) => <p key={arrIdx}>
            {arr.choiceId}) {arr.text}</p>)}</p>)
            }
        </div>
    )
}
    else {return 'LOADING'}
}


export default Questions