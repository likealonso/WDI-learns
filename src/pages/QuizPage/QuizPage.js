import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Questions from '../../components/Questions/Questions';


// class QuizPage extends Component {
//     constructor(props){
//         console.log('props =', props)
//         super();
//         this.state = {
//             unitId: props.unitId,
//             unit: {},
//             questions: []
//         }
//         console.log('HEY', this.state)
//     }


    // componentDidMount() {
    //     this.getQuestions();
        // this.onAnswering();
    // }

    // onAnswering() {
        // update the answers array
        // console.log('qId = ?')
        // console.log('choiceId of the choice i selected = ?')
        // }
    

    // onsubmit() {
        // create the body object for the post request
        // make post request to /api/scores
    // }

    // getQuestions() {
    //     console.log('getting quetions; for unit =', this.state.unitId)
    //     fetch('/data')
    //     // fetch(`/api/questions/${this.state.unitId}`)
    //     // fetch('/api/questions/' + this.state.unitId) // TODO CHANGE TO THIS

    //         .then( data => data.json() )
    //         .then( data => {
    //             this.setState({unit: data});
    //         })
    //         .catch( err => {
    //             console.log('err =', err)
    //         })
    // }
class QuizPage extends Component {
    constructor(props) {
        super(props);
        let answers = props.unit ? props.unit.questions.map(q => ({
            unitId: props.unitId,
            questionId: q.questionId,
            answerIdx: null,
            correctIdx: q.correctIdx,
            correct: false,
        })) : [];
        this.state = {answers}
    }

    // Possible structure of answer object
    // {
    //   unitId: 2,
    //   questionId: 2 
    //   answerIdx: 0
    //   correct: true 
    // }

    handleAnswer = (e) => {
        var answerObj = this.state.answers.find(answer => answer.questionId === parseInt(e.target.name));
        answerObj.answerIdx = parseInt(e.target.value);
        answerObj.correct = (answerObj.answerIdx === answerObj.correctIdx);
        this.setState({
            answers: this.state.answers
        });
    }

    

    submitAnswers = () => {
        this.props.handleAnswers(this.state.answers);
        // this.props.calculateScore(this.state.scores)
        // change client route to show AnswersPage
    }

    


// this.state.answers.some(a => a.answerIdx === null)
    
    render() {
        return (
            <div>
                <h2>Answering Quiz {this.props.unitId}</h2>
                <Questions 
                    unit={this.props.unit}
                    currentUnitId={this.props.unitId}
                    handleAnswer={this.handleAnswer}
                />
                <button onClick={this.submitAnswers}>Submit</button>
            </div>
        );
    }
}

export default QuizPage;



