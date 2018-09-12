import React, { Component } from 'react';
import {Field,  reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth'

class Signup extends Component {
  componentWillUnmount() {

    this.props.authError("");
  }

  handleFormSubmit(formProps) {
    this.props.signupUser(formProps) ;
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops !</strong> {this.props.errorMessage}
        </div>
      )
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return  (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} autoComplete="off">
        <fieldset className="form-group">
          <label><Field name="email" component="input" type="text" placeholder="Your email" className="form-control" autoComplete='email' /></label>
        </fieldset>
        <fieldset className="form-group">
          <label><Field name="password"  component="input" type="password" placeholder="Your password" className="form-control" autoComplete="off" /></label>
        </fieldset>
        <fieldset className="form-group">
          <label> <Field name="passwordConfirm" component="input" type="password"  placeholder="Confirm Password" className="form-control" autoComplete="off" /></label>
        </fieldset>
        {this.renderAlert()}
        <button type="submit" className={`btn btn-login btn-major`}>Sign up</button>
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
  form: 'signup',
})(connect(mapPropsToState, actions)(Signup));
