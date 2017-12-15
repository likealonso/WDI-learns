import React from 'react';
import {Link} from 'react-router-dom';

const UnitCard = (props) => {
    const unit = props.unit;
    return (
        <div> 
            <button><Link to={`/units/${unit.unitId}`} style={{margin: 30, fontSize: 50}}>Unit {unit.unitId} </Link></button>
        </div>
    )
}

export default UnitCard