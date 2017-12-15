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
import tokenService from './utils/tokenService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      answers: [],
      // scores:[],
      units: [],
      currentScore: 0
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
    this.setState({answers});

    // const score = this.score(this.state.answers);

    // const unitId = answers[0].unitId;
  }
  
  score(answers) {
    let score = 0;
    let validAnswer = answers.filter(el => el.answerIdx !== null).length;
    answers.forEach(answer => {
      if (answer.correct) score++
    })
    return score+"/10"
  }

   updateCurrentScore = (score) => {
    this.setState({
      currentScore: score
    })

    // this.props.history.push('/scores')
    
  } 
  // updateCurrentScore = (score) => {
    
  //   const newScore = {
  //     name: '',
  //     score: '',
  //     unit: ''
  //   }

    // make request to backend to store score
    // THEN go to /scores after fetch request is done (in then)
  //   fetch('/api/scores', {
  //     method: 'POST',
  //     headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()}),
  //     body: {}
  //   }).then((res) => {
      
  //     this.setState({
  //       currentScore:score
  //     });
  //     this.props.history.push('/scores')
  //   }).catch(err => {
      
  //   })
    
  // } 

//   calculateScore = (scores) => {
//     this.setState({scores})

// }

  /* other functions */
  getQuestions(user) {
    return fetch('/data')
    // fetch(`/api/questions/${this.state.unitId}`)
    // fetch('/api/questions/' + this.state.unitId) // TODO CHANGE TO THIS
        .then( res => res.json() )
        .catch( err => {
        })
        .then(units => {
          units.forEach(unit => {
            unit.questions = unit.questions
                                .sort(() => .5 - Math.random());
          });
          this.setState({user, units});
        });
}


  /* lifecycle methods */
  
  componentDidMount() {
    let user = userService.getUser();
    this.getQuestions(user)
  }

  render() {
    return (
      <div className="App">
      <div className="header-header">
          <NavBar user={this.state.user}
            handleLogout={this.handleLogout}/>
        <br/>
        <header className='header-footer'>WDI LEARNS</header>
      </div>
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
                score={this.state.currentScore}
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
              userService.getUser() ?
                <QuizPage
                  {...props}
                  unitId={props.match.params.id}
                  unit={this.state.units.find(u => u.unitId === parseInt(props.match.params.id))}
                  handleAnswers={this.handleAnswers}
                  calculateScore={this.calculateScore}
                  finalScore={this.state.currentScore}
                  score={this.score}
                  updateCurrentScore={this.updateCurrentScore}
                />
                : <Redirect to='/' />
            )}/>
          </Switch>
      </div>
    );
  }
}


export default App;