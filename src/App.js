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

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: null
    }
  }

  componentDidMount() {
    fetch('/unit/1').then( data => data.json() ).then( data =>{
      this.setState({questions: data})
    } )
  }
  render() {
    return (
      <div className="App">
      
          <Switch>
            <Route exact path='/' render={(props) => <LoginPage />} />
            <Route exact path='/unit' render={(props) => <UnitsPage />} />
            <Route exact path='/unit/1' render={(props) => <QuizPage questions={this.state.questions}/>}/>}
            
          </Switch>
      </div>
    );
  }
}

export default App;

