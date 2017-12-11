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

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: null
    }
  }

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }
  
  // fetch('/unit/1').then( data => data.json() ).then( data =>{
  //   this.setState({questions: data})
  // } )
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
          <Switch>
            <Route exact path='/' render={(props) => (
              userService.getUser() ? 
                <Redirect to='/unit'/>
                :
                <HomePage 
                {...props}
                handleLogin={this.handleLogin}/>
            )}/>
            <Route exact path='/login' render={(props) => (
              userService.getUser() ? 
                <Redirect to='/unit'/>
                :
                <LoginPage 
                {...props}
                handleLogin={this.handleLogin}/>
            )}/>
            <Route exact path='/signup' render={(props) => (
              userService.getUser() ? 
                <Redirect to='/unit'/>
                :
                <SignupPage 
                {...props}
                handleSignup={this.handleSignup}/>
            )}/>
            <Route exact path='/scores' render={(props) => (
              userService.getUser() ?
                <ScorePage />
              : <Redirect to='/login'/> 
            )}/>
            <Route exact path='/unit' render={(props) => (
              userService.getUser() ?
                <UnitsPage 
                user={this.state.user}
                handleLogout={this.handleLogout} 
                />
              : <Redirect to='/'/>  
            )}/> 
            <Route exact path='/unit/1' render={(props) => (
              userService.getUser() ?
                <QuizPage 
                user={this.state.user}
                handleLogout={this.handleLogout}
                questions={this.state.questions}
                />
                : <Redirect to='/' />
            )}/>
          </Switch>
      </div>
    );
  }
}

export default App;

