import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "../containers/Home";
import Set from "../containers/set";
import MyCards from "../containers/MyCards";
import Signin from "./auth/signin";
import Signout from "./auth/signout";
import Signup from "./auth/signup";
import Login from '../containers/login'
import Authenticated from './routes/authenticated';
import Public from './routes/public';
import Settings from "./Settings";
import Menu from "./Menu";

const Routes = () => (
  <div className="page" style={{display:"flex"}}>
    <Menu/>
    <div className="container" style={{flexBasis: '80%'}}>
      <Switch>
        <Route exact path='/home' component={Home}/>
        <Public exact path='/' component={Login}/>
        <Authenticated path="/set/:set" component={Set}/>
        <Authenticated path="/settings/:settings" component={Settings}/>
        <Authenticated path="/my-cards" component={MyCards}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/signout" component={Signout}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
    </div>
  </div>
);
export default Routes
