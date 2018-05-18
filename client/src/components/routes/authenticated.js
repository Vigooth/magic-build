import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Switch, Route, Link } from 'react-router-dom'

const UnauthorizedRoute = () => <div>You must be logged to see this page</div>;
 const Authenticated = ({authenticated, component,path, exact, ...rest })=>{
  return (
    <Route
      path={path}
      exact={exact}
      render={ props => authenticated ? (React.createElement(component, {
        ...props, ...rest, authenticated,
    })) : <UnauthorizedRoute />
    }/>
  )
}
const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated
  }
)
export default  connect(mapStateToProps, null)(Authenticated);
