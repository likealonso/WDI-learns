import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import Questions from '../../components/Questions/Questions'

const QuizPage = (props) => {
    
    return (
        <div>
            <NavBar user={props.user}
            handleLogout={props.handleLogout}
            />
            <br/>
            <br/>
            This is a unit<br/>
            There will be questions<br/><br/>
            {props.questions ? 
            props.questions.map( question => <li link={question.text}>{question.text} -- {question.unitId}</li>)
            : <h1>loading</h1>}
            
        </div>
    )
}
export default QuizPage;

