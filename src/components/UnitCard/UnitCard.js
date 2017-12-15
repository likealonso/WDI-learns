import React from 'react';
import {Link} from 'react-router-dom';

const UnitCard = (props) => {
    const unit = props.unit;
    return (
        <div> 
            <Link to={`/units/${unit.unitId}`} style={{fontSize: 30}}>Unit {unit.unitId}</Link>
        </div>
    )
}

export default UnitCard