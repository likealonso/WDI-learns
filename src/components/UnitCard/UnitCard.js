import React from 'react';
import {Link} from 'react-router-dom';

const UnitCard = (props) => {
    const unit = props.unit;
    //console.log(unit)
    return (
        <div> 
            <button><Link to={`/units/${unit.unitId}`} className={'unitButton'}>Unit {unit.unitId} </Link></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img style={{width:150, height:"auto"}} src={unit.imgUrl}></img><br/><br/>
        </div>
    )
}

export default UnitCard