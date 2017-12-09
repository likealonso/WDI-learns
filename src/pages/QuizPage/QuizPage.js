import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import Questions from '../../components/Questions/Questions'

const QuizPage = (props) => {
    return (
        <div>
            <NavBar />
            This is a unit<br/>
            There will be questions<br/><br/>
            <Questions />
            <Questions />
            <Questions />
            <Questions />
            <Questions />
            <Link to='/'>Home</Link>
        </div>
    )
}
export default QuizPage;