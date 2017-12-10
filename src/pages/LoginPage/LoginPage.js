import React from 'react';
import {Link} from 'react-router-dom'

const LoginPage = (props) => {
    return (
        <div>
            <img src="../../images/jimothy.png"></img><br/>
            <Link to='/unit'><h1>Welcome</h1></Link>

        </div>
    )
}

export default LoginPage