import React from 'react';
import Header from './Header';
import { Footer } from './Footer';
import Routes from './Routes';

const App = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <Routes />
      <Footer/>
    </div>

  );
};

export default (App);
