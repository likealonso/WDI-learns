import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import Questions from '../../components/Questions/Questions'

const UnitsPage = (props) => {
    return (
        <div>
            <NavBar user={props.user}
            handleLogout={props.handleLogout}
            />
            <br/>
            <br/>
            <header className="header-footer"><Link to='/unit/1'>Unit 1</Link></header>
            
            
        </div>
    )
}
export default UnitsPage;