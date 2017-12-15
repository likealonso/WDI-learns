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
        this.setState({showAnswers: true})
        // will take me to a different page
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
            <div>
                <br/><br/>
                <h4>You have entered the world of WDI. On guard!</h4> 
                    <h2>Take this Unit {this.props.unitId} Quiz:</h2><br/>
                    <div style={{fontSize: 15}}><Link to='/units'>Or Try Another Quiz!</Link></div><br/>
                    <div className="quiz">
                        <Questions 
                            unit={this.props.unit}
                            currentUnitId={this.props.unitId}
                            handleAnswer={this.handleAnswer}
                            answers={this.state.answers}
                            showAnswers={this.state.showAnswers}
                        />
                        <button className="btn btn-primary" onClick={this.submitAnswers}>What's your score?</button><br/><br/>
                    <div>You score is: {this.props.finalScore}</div><br/>
                </div>
            </div>
        );
    }
}

export default QuizPage