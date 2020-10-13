import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import '../LoginPage/LoginPage.css'
var google= window.google
const HomePage = (props) => {
    return (
        
        <div className='LoginPage'><br/>
            <h2>"I've been expecting you"</h2>
            <br/>
            <img style={{border: "1px black dotted"}} src="../../images/jimothy.png"></img><br/><br/>
            <h5>- Jim Clark, General Assembly instructor</h5>
        </div>
    )
}

export default HomePage