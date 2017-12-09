import React from 'react';
import {Link} from 'react-router-dom'
import Questions from '../Questions/Questions'

const Units = (props) => {
    return (
        <div>
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
export default Units;