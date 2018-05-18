import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Switch, Route, Link } from 'react-router-dom'
import  { browserHistory} from 'react-router';
import Home from '../Home'
const UnauthorizedRoute = () => browserHistory.push('/feature');
 const Public = ({authenticated, component,path, exact, ...rest })=>{
  return (
    <Route
      path={path}
      exact={exact}
      render={ props => authenticated ? <Home /> : (React.createElement(component, {
        ...props, ...rest, authenticated,
      }))
      }/>
  )
}
const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated
  }
)
export default  connect(mapStateToProps, null)(Public);
