import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Home from "./Home";
import Set from "./set";
import Signin from "./auth/signin";
import Signout from "./auth/signout";
import Signup from "./auth/signup";
import Login from './login'
import Authenticated from './routes/authenticated';
import Public from './routes/public';
import TestRestricted from './TestRestricted'

const Routes = () => (
  <div className="container">
    <Switch>
      <Route exact path='/home' component={Home}/>
            <Public exact path='/' component={Login}/>
      <Authenticated exact path='/test' component={TestRestricted} />
      <Authenticated path="/set/:set" component={Set}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/signout" component={Signout}/>
      <Route path="/signup" component={Signup}/>
    </Switch>
  </div>
)
export default Routes
