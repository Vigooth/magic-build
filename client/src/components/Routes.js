import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
//import Home from "../containers/Home";
//import Set from "../containers/set";
import PrepareMyCards from "../containers/MyCards";
import MyDecks from "../containers/decks/MyDecks";
import Signin from "./auth/signin";
import Signout from "./auth/signout";
import Signup from "./auth/signup";
import Login from '../containers/login'
import Authenticated from './routes/authenticated';
import Public from './routes/public';
import Settings from "./Settings";
import Menu from "./Menu";
import Loadable from 'react-loadable';
import { signoutUser } from "../actions/auth";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
const Loading = () => <div/>;
const Home = Loadable({
  loader: () => import('../containers/Home'),
  loading: Loading,
});
const Set = Loadable({
  loader: () => import('../containers/set'),
  loading: Loading,
});
const WithContainer = ({children}) => {
  return <div className="container">{this.props.children}</div>
}
const RoutesAuthenticated = () => {
  return (
    <Switch>
      <Authenticated exact path='/' component={Home}/>
      <Authenticated path="/set/:set" component={Set}/>
      <Authenticated path="/settings/:settings" component={Settings}/>
      <Authenticated path="/my-cards" component={PrepareMyCards} />
      <Authenticated path="/my-decks" component={MyDecks} noContainer />
      <Route path="/signout" component={Signout}/>
    </Switch>
  )
};
const RoutesPublic = () => {
  return <div className="container">
    <Switch>
      <Public exact path='/' component={Login}/>
      <Public path="/set/:set" component={Set}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/signout" component={Signout}/>
      <Route path="/signup" component={Signup}/>
    </Switch></div>
};
const Routes = ({authenticated}) => (
  <div className="page" style={{display:"flex"}}>
    <Menu/>
    {authenticated ? <RoutesAuthenticated /> : <RoutesPublic/>}
  </div>

);
const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated
  }
);
export default withRouter(connect( mapStateToProps, { signoutUser })(Routes));
