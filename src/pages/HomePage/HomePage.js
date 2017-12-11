import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import '../LoginPage/LoginPage.css'

const HomePage = (props) => {
    return (
        <div className='LoginPage'>
            <img style={{border: "1px black dotted"}} src="../../images/jimothy.png"></img><br/>
            <h1>"I've been expecting you"</h1>
            <div className='Links'>
                <h2><Link to='/login'>Log In</Link>&nbsp;
                or&nbsp;
                <Link to='/signup'>Sign Up</Link></h2>
            </div>
        </div>
    )
}

export default HomePage