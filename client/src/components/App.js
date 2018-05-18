import React, { Component } from 'react';
import Header from './Header';
import Routes from './Routes';

const App = () => {
  //console.log("App", authenticated)
  return (
    <div className='wrapper'>
      <Header/>
      <Routes />
    </div>

  );
};
const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated
  }
);
export default (App);
