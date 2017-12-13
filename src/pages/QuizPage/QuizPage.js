import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Questions from '../../components/Questions/Questions';


class QuizPage extends Component {
    constructor(props){
        console.log('props =', props)
        super();
        this.state = {
            unitId: props.unitId,
            unit: {},
            questions: [],
            answers: []
        }
        console.log('HEY', this.state)
    }

    componentDidMount() {
        console.log('comopnent mounted')
        this.getQuestions();
        // this.onAnswering();
    }

    onAnswering() {
        // update the answers array
        console.log('qId = ?')
        console.log('choiceId of the choice i selected = ?')
        }
    

    onsubmit() {
        // create the body object for the post request
        // make post request to /api/scores
    }

    getQuestions() {
        console.log('getting quetions; for unit =', this.state.unitId)
        // fetch('/1')
        fetch(`/api/questions/${this.state.unitId}`)
        // fetch('/api/questions/' + this.state.unitId) // TODO CHANGE TO THIS

            .then( data => data.json() )
            .then( data => {
                this.setState({unit: data});
            })
            .catch( err => {
                console.log('err =', err)
            })
    }

    render() {
        
        if (!this.state.unit.unitId) {
            return (<div>Loading</div>)
        } else {
            return (
                <div>
                    show questions here
                    <Questions 
                        unit={this.state.unitId}
                        questions={this.getQuestions}
                        user={this.state.user}
                        unitId={this.match.params.id}
                        handleLogout={this.handleLogout}
                        units={this.state.units}
                    />
                </div>
            )
        }
    }
}

export default QuizPage;



