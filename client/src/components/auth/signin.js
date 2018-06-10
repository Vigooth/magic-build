import React, { Component } from 'react';
import {Field,  reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import  { signinUser } from '../../actions/auth'
class Signin extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  }

  render() {
    const { handleSubmit } = this.props;
    return  (<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <fieldset className="form-group">
        <label><Field name="email" component="input" type="text" placeholder="Your email" className="form-control" /></label>
      </fieldset>
      <fieldset className="form-group">
        <label><Field name="password"  component="input" type="password" placeholder="Your password" className="form-control" /></label>
      </fieldset>
      <button type="submit" className={`btn btn-login btn-major`}>Sign in</button>
    </form>)
  }
}


export default reduxForm({
  form: 'signin',
})(connect(null, {signinUser} )(Signin));
