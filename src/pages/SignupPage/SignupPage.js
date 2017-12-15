import React, {Component} from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignupPage'>
        <br/>
            <h2>"Do or WDI!"</h2>
            <br/>
        <img style={{border: "1px black dotted"}} src="../../images/jimothy.png"></img>
        <SignupForm
           {...this.props} 
            updateMessage={this.updateMessage} 
            handleSignup={this.props.handleSignup}
            />
        <p>{this.state.message}</p>
      </div>
    );
  }
};

export default SignupPage;