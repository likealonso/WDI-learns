import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import Questions from '../../components/Questions/Questions'
import UnitCard from '../../components/UnitCard/UnitCard'

class UnitsPage extends Component {
    constructor(){
        super();
        this.state = {
            units: []
        }
    }

    componentDidMount() {
        fetch('/1').then( data => data.json() ).then( data =>{
            this.setState({units: data})
            console.log(data)
            })
    }

    render() {
        if (this.state.units.length === 0) {
            return (<div>loading</div>)
        } else {
            return (
                <div>Units
                    {this.state.units.map(unit => <UnitCard key={unit.unitId} unit={unit}/>)}
                </div>
            )
        }
    }


    //     if (props.units) {
//         console.log('HELLO!', props.units[0].unitId)
        
//     return (
//         <div>
//             <br/>
//             <br/>
//             <header className="header-footer"><Link to={`/units/${props.units[0].unitId}`}>Unit 1</Link></header>
            
            
//         </div>
//     )
// }
//     else {return 'loading'}
}
export default UnitsPage;