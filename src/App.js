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

class App extends Component {
  constructor() {
    super();
    this.state = {
      units: null,
      answers: [],
      scores:[],
      quizScore: 0,
      // checked: false
    }
  }

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

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
            <Route exact path='/units/:id' render={(props) => {
              // console.log('route > route param id =', props.match.params.id)
              userService.getUser() ?
                <QuizPage 
                user={this.state.user}
                unitId={props.match.params.id}
                handleLogout={this.handleLogout}
                units={this.state.units}
                />
                : <Redirect to='/' />
            }}/>
          </Switch>
      </div>
    );
  }
}

export default App;
