import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css'

const LoginPage = (props) => {
    return (
        <div className='LoginPage'><br/>
            <h2>"Beautiful!"</h2><br/>
            <img style={{border: "1px black dotted"}} src="../../images/jimothy.png"></img>
            <LoginForm       
                {...props} 
                handleLogin={props.handleLogin} 
            />
        </div>
    )
}

export default LoginPage