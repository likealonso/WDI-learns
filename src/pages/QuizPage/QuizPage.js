import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Questions from '../../components/Questions/Questions';

class QuizPage extends Component {
    constructor(props) {
        super(props);
        this.buildAnswers(props);
        this.submitAnswers = this.submitAnswers.bind(this)
    }

    handleAnswer = (e) => {
        var answerObj = this.state.answers.find(answer => answer.questionId === parseInt(e.target.name));
        answerObj.answerIdx = parseInt(e.target.value);
        answerObj.correct = (answerObj.answerIdx === answerObj.correctIdx);
        this.setState({
            answers: this.state.answers
        });
    }

    buildAnswers = (props) => {
        let answers = props.unit ? props.unit.questions.map(q => ({
            unitId: props.unitId,
            questionId: q.questionId,
            answerIdx: null,
            correctIdx: q.correctIdx,
            correct: false,
        })) : [];
        this.state = {answers, showAnswers: false}
    }
    
    
    submitAnswers = () => {
        // var submit = this.props.updateCurrentScore(this.props.score(this.state.answers));
        this.setState({showAnswers: true})
        // this.props.updateCurrentScore(this.props.score(this.state.answers));

        // var submit = this.props.updateCurrentScore(this.props.score(this.state.answers));
        // Promise.all([submit]).then((resolve, reject)=> {
        //     this.setState({showAnswers: true});
        // })
        // this.props.handleAnswers(this.state.answers);
        // this.props.score(this.state.answers);
        // this.props.history.push('/scores')
    }

    componentWillReceiveProps(next) {
        this.buildAnswers(next);
    }

    giveMeScore = () => {
        this.props.handleAnswers(this.state.answers);
        this.props.score(this.state.answers);
        this.props.updateCurrentScore(this.props.score(this.state.answers));
    }
    
    render() {
        
        return (
            <div >
                <br/>
                <h4>You have entered the world of WDI. On guard!</h4> 
                    <h3>Quiz {this.props.unitId}</h3>
                    <div style={{border:'1px red solid', padding: '20px 50px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Questions 
                        unit={this.props.unit}
                        currentUnitId={this.props.unitId}
                        handleAnswer={this.handleAnswer}
                        answers={this.state.answers}
                        showAnswers={this.state.showAnswers}
                    />
                    <button className="btn btn-primary" onClick={this.submitAnswers}>Submit</button>
                    <div>Score:{this.props.finalScore}</div>
                    
                </div>
            </div>
        );
    }
}

export default QuizPage