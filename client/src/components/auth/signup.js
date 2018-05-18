import React, { Component } from 'react';
import {Field,  reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth'


class Signup extends Component {
  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
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
    return  (<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <fieldset className="form-group">
        <label>Email:</label>
        <Field name="email" component="input" type="text" className="form-control" />
      </fieldset>
      <fieldset className="form-group">
        <label>Password:</label>
        <Field name="password"  component="input" type="password"  className="form-control" />
      </fieldset>
      <fieldset className="form-group">
        <label>Confirm Password:</label>
        <Field name="passwordConfirm"  component="input" type="password"  className="form-control" />
      </fieldset>
      {this.renderAlert()}
      <button type="submit" className={`btn btn-primary`}>Sign up</button>
    </form>)
  }
}


export default reduxForm({
  form: 'signup',
})(connect(null, actions)(Signup));