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
            <h2>"Beautiful!"</h2>
            <br/>
        <img style={{border: "1px black dotted"}} src="../../images/jimothy.png"></img><br/>
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