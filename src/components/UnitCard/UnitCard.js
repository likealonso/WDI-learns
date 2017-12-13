import React from 'react';
import {Link} from 'react-router-dom';

const UnitCard = (props) => {
    const unit = props.unit;
    return (
        <div> Name: 
            <Link to={`/units/${unit.unitId}`}>{unit.unitId}</Link>
        </div>
    )
}

export default UnitCard