import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../../actions/auth'


class Signout extends Component {

  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    if (!this.props.authenticated) {
      location.href = '/';
    }
    return  (<div>Sorry to see you go...</div>)
  }
}
const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated
  }
);
export default connect( mapStateToProps, { signoutUser })(Signout);
