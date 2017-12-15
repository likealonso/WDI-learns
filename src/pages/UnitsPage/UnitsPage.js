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
        fetch('/data').then( data => data.json() ).then( data =>{
            this.setState({units: data})
            })
    }
    
    render() {
        if (this.state.units.length === 0) {
            return (<div>loading</div>)
        } else {
            return (
                <div>
                    <br/>
                    <h2>Select Your Unit</h2>
                    <br/>
                    {this.state.units.map(unit => <UnitCard key={unit.unitId} unit={unit}/>)}
                </div>
            )
        }
    }
}
export default UnitsPage;