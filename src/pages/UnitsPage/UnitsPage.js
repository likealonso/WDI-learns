import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import Questions from '../../components/Questions/Questions'

const UnitsPage = (props) => {
    return (
        <div>
            <NavBar />
            
            <li><Link to='/unit/1'>Unit 1 link</Link></li>
            
        </div>
    )
}
export default UnitsPage;