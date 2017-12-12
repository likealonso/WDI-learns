import React from 'react';

const Questions = (props) => {
    return (
        <div>
            <h3>This is the first unit</h3>
            <button onClick={()=> props.handleQuestions()}>Press me</button>
                {props.questions ? 
                props.questions.map( (el, elIdx) => 
                <p key={elIdx}><h1>{el.text}</h1><br/>{el.choices.map((arr, arrIdx) => <p key={arrIdx}>
                {arr.choiceId}) {arr.text}</p>)}</p>)
                : <h1>loading</h1>}
        </div>
    )
}


export default Questions