import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import './App.css';
import UnitsPage from './pages/UnitsPage/UnitsPage'
import QuizPage from './pages/QuizPage/QuizPage'
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import ScorePage from './pages/ScorePage/ScorePage'
import userService from './utils/userService'
import HomePage from './pages/HomePage/HomePage'
import NavBar from './components/NavBar/NavBar'

function buildAnswer(unitId, questionId, answerIdx) {
  var unit = this.state.units.find(u => u.unitId = unitId);
  var question = unit.questions.find(q => q.question)
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      answers: [],
      scores:[],
      units: []
    }
  }

  /* event handlers */
  
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }
  
  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }
  
  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAnswers = (answers) => {
    // can the user submit? aka are there enough answers?
    // we need to know which unit they are taking
    // compare the number of questions in the unit they're taking to the number of answers
    // if not enough answers... do what?
    // else continue

    // then we can score
    console.log('answers =', JSON.stringify(answers))
    this.setState({answers});

    // const answers = [{"unitId":"1","questionId":1,"answerIdx":0,"correctIdx":0,"correct":true},{"unitId":"1","questionId":2,"answerIdx":1,"correctIdx":0,"correct":false},{"unitId":"1","questionId":3,"answerIdx":2,"correctIdx":0,"correct":false},{"unitId":"1","questionId":4,"answerIdx":0,"correctIdx":0,"correct":true}];
    const score = this.score(this.state.answers);

    const unitId = answers[0].unitId;
    // get other data for api request for POST score
    // make api request for POST score
  }
  
  score(answers) {
    let score = 0;

    answers.forEach(answer => {
      console.log('ansuwer =', answer)
      if (answer.correct) score++
    })
    console.log(score)
    return score
  }

//   calculateScore = (scores) => {
//     this.setState({scores})

// }

  /* other functions */
  getQuestions() {
    return fetch('/data')
    // fetch(`/api/questions/${this.state.unitId}`)
    // fetch('/api/questions/' + this.state.unitId) // TODO CHANGE TO THIS
        .then( res => res.json() )
        .catch( err => {
            console.log('err =', err)
        });
}


  /* lifecycle methods */
  
  componentDidMount() {
    let user = userService.getUser();
    this.getQuestions().then(units => {
      this.setState({user, units});
    });
  }

  render() {
    return (
      <div className="App">
        <header className='header-footer'>W D I &nbsp;&nbsp; L E A R N S</header>
          <NavBar user={this.state.user}
            handleLogout={this.handleLogout}/>
          <Switch>
            <Route exact path='/' render={(props) => (
              userService.getUser() ? 
                <Redirect to='/units'/>
                :
                <HomePage 
                {...props}
                handleLogin={this.handleLogin}/>
            )}/>
            <Route exact path='/login' render={(props) => (
              userService.getUser() ? 
                <Redirect to='/units'/>
                :
                <LoginPage 
                {...props}
                handleLogin={this.handleLogin}/>
            )}/>
            <Route exact path='/signup' render={(props) => (
              userService.getUser() ? 
                <Redirect to='/units'/>
                :
                <SignupPage 
                {...props}
                handleSignup={this.handleSignup}/>
            )}/>
            <Route exact path='/scores' render={(props) => (
              userService.getUser() ?
                <ScorePage 
                scores={this.state.scores}
                />
              : <Redirect to='/login'/> 
            )}/>
            <Route exact path='/units' render={(props) => (
              userService.getUser() ?
                <UnitsPage 
                user={this.state.user}
                handleLogout={this.handleLogout} 
                units={this.state.units}
                unitId={props.match.params.id}
                />
              : <Redirect to='/'/>  
            )}/> 
            <Route exact path='/units/:id' render={(props) => (
              // console.log('route > route param id =', props.match.params.id)
              userService.getUser() ?
                <QuizPage
                  unitId={props.match.params.id}
                  unit={this.state.units.find(u => u.unitId === parseInt(props.match.params.id))}
                  handleAnswers={this.handleAnswers}
                  calculateScore={this.calculateScore}
                />
                : <Redirect to='/' />
            )}/>
          </Switch>
      </div>
    );
  }
}


export default App;
