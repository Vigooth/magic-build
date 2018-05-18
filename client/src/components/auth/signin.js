import React, { Component } from 'react';
import {Field,  reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import  { signinUser } from '../../actions/auth'
class Signin extends Component {
  handleFormSubmit({ email, password }) {
    console.log("submitted");
    console.log(email, password);
    console.log("props",this.props)

    this.props.signinUser({ email, password });
  }

  render() {
    const { handleSubmit } = this.props;
    console.log("props",this.props)
    return  (<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <fieldset className="form-group">
        <label>Email:</label>
        <Field name="email" component="input" type="text" className="form-control" />
      </fieldset>
      <fieldset className="form-group">
        <label>Password:</label>
        <Field name="password"  component="input" type="password" className="form-control" />
      </fieldset>
      <button type="submit" className={`btn btn-primary`}>Sign up</button>
    </form>)
  }
}


export default reduxForm({
  form: 'signin',
})(connect(null, {signinUser} )(Signin));