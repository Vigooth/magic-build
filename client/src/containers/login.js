import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import  { signinUser } from '../actions/auth';
import Signin from '../components/auth/signin';
import Signup from '../components/auth/signup';

class Login extends Component {
  state = {
    "signin": true
  };

  toggleSignin = () => {
    this.setState({ signin:!this.state.signin })
  };

  renderAuth(){
    return this.state.signin ? <Signin /> :  <Signup />
  }

  render() {
    return (
      <div className="login">
        {this.renderAuth()}
        <button onClick={this.toggleSignin} className={`btn btn-primary`}>{this.state.signin?'No account ? Click here':'Already registred ? Click here'}</button>
      </div>
    )
  }
}

export default reduxForm({
  form: 'login',
})(connect(null, {signinUser} )(Login));
