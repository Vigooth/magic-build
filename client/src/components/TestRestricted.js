import React, { Component } from 'react';
import { connect } from 'react-redux';

class TestRestricted extends Component {
  render() {
    return (
      <div>Restricted ROUTES</div>
    )
  }
}
const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated
  }
)
export default connect(mapStateToProps, null)(TestRestricted);
