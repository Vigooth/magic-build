import React from 'react';

import { connect } from 'react-redux';

import { Route } from 'react-router-dom'

const UnauthorizedRoute = () => <div>You must be logged to see this page</div>;
const Authenticated = ({ authenticated, component, path, exact, noContainer, ...rest }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={ props =>
        <div className={noContainer ? 'w-100' : 'container'}>
          {authenticated ? (
            React.createElement(component, {
              ...props, ...rest, authenticated,
            })) : <UnauthorizedRoute />} </div>
      }/>
  )
};
const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated
  }
);
export default  connect(mapStateToProps, null)(Authenticated);
