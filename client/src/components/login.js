import React, { Component } from 'react';
import {Field,  reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import  { signinUser } from '../actions/auth';
import Signin from '../components/auth/signin'
import Signup from '../components/auth/signup'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "signin": true
    }
  }
  renderAuth(){
    return this.state.signin ? <Signin /> :  <Signup />
  }
  render() {
    const { handleSubmit } = this.props;
    return  (<div className="login">
      {this.renderAuth()}
    <button onClick={()=>{this.setState({signin:!this.state.signin})}} className={`btn btn-primary`}>{this.state.signin?'No account ? Click here':'Already registred ? Click here'}</button>
    </div>)
  }
}


export default reduxForm({
  form: 'login',
})(connect(null, {signinUser} )(Login));
