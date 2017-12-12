import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Questions from '../../components/Questions/Questions';


const QuizPage = (props) => {

        return (
            <div>
                <NavBar user={props.user}
                handleLogout={props.handleLogout}
                />
                <Questions 
                questions={props.questions}
                handleQuestions={props.handleQuestions}
                /> 
                
            </div>
        )
    }


export default QuizPage;

