import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from "../containers/Home";
import Set from "../containers/set";
import Signin from "./auth/signin";
import Signout from "./auth/signout";
import Signup from "./auth/signup";
import Login from '../containers/login'
import Authenticated from './routes/authenticated';
import Public from './routes/public';
import Settings from "./Settings";

const Routes = () => (
  <div className="page ">
    <div className="container">
      <Switch>
        <Route exact path='/home' component={Home}/>
        <Public exact path='/' component={Login}/>
        <Authenticated path="/set/:set" component={Set}/>
        <Authenticated path="/settings/:settings" component={Settings}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/signout" component={Signout}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
    </div>
  </div>
);
export default Routes
