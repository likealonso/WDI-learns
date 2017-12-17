import React from 'react';
import {Link} from 'react-router-dom';

const UnitCard = (props) => {
    const unit = props.unit;
    return (
        <div> 
            <button><Link to={`/units/${unit.unitId}`} className={'unitButton'}>Units {unit.unitId} </Link></button>
        </div>
    )
}

export default UnitCard