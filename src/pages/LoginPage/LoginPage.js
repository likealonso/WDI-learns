import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css'

const LoginPage = (props) => {
    return (
        <div className='LoginPage'>
            <img src="../../images/jimothy.png"></img><br/>
            <h1>Do you got what it takes?</h1>
            
            <LoginForm       
                {...props} 
                handleLogin={props.handleLogin} 
            />

        </div>
    )
}

export default LoginPage