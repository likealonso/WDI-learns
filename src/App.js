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

class App extends Component {
  render() {
    return (
      <div className="App">
      
          <Switch>
            <Route exact path='/' render={() => <UnitsPage />} />
            <Route exact path='/unit' render={(props) => <QuizPage />}/>}
          </Switch>
      </div>
    );
  }
}

export default App;

