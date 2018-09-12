import React, { Component } from 'react';
import {Field,  reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import  { signinUser, authError } from '../../actions/auth'
import { Alert } from "reactstrap";
class Signin extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  }
  displayError = () => {
    if (this.props.errorMessage) return <Alert color="danger"> {this.props.errorMessage}</Alert>
  };
  componentWillUnmount() {
    this.props.authError("");
  }
  render() {
    const { handleSubmit } = this.props;
    return  (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} autoComplete="on">
        <fieldset className="form-group">
          <label><Field name="email" component="input" type="text" placeholder="Your email" className="form-control" autoComplete="email" /></label>
        </fieldset>
        <fieldset className="form-group">
          <label><Field name="password" component="input" type="password" placeholder="Your password" className="form-control" autoComplete="current-password" /></label>
        </fieldset>
        {this.displayError()}
        <button type="submit" className={`btn btn-login btn-major`}>Sign in</button>
      </form>
    )
  }
}

const mapPropsToState = state => {
  return {
    errorMessage: state.auth.error
  }
};
export default reduxForm({
  form: 'signin',
})(connect(mapPropsToState, { signinUser, authError } )(Signin));
