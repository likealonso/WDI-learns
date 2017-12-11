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
            <Route exact path='/login' render={(props) => 
              <LoginPage 
              {...props}
              handleLogin={this.handleLogin}
              />
              } />
            <Route exact path='/signup' render={(props) => 
              <SignupPage 
              {...props}
              handleSignup={this.handleSignup}
              />} />
            <Route exact path='/scores' render={(props) => (
              userService.getUser() ?
                <ScorePage />
              : <Redirect to='/login' /> 
            )}/>
            <Route exact path='/unit' render={(props) => <UnitsPage 
              user={this.state.user}
            />} />
            <Route exact path='/unit/1' render={(props) => <QuizPage 
              user={this.state.user}
              questions={this.state.questions}/>}/>}
          
            
          </Switch>
      </div>
    );
  }
}

export default App;

