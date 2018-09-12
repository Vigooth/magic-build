import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconMenu, IconUser, Logo } from "./card/icons/icons";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { toggleMenu } from '../actions/index'
import { connect } from "react-redux";
import { signoutUser } from "../actions/auth";

class Header extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const {authenticated } = this.props;
    return (
      <header className="navbar" >
        <nav className="nav-item">

          <div className="header-board-buttons" onClick={this.props.toggleMenu}>
            {authenticated ? <IconMenu size="28px"  /> :null}
          </div>
          <div className="header-title">
            <Logo size="40px"  />
            <Link className="title" to="/">MANACARD </Link>
          </div>

          <div className="header-user">
            {authenticated ?
            <UncontrolledDropdown nav inNavbar isOpen={this.state.isOpen} toggle={this.toggle}>
              <DropdownToggle nav>
                <IconUser size="32px"/>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem><Link  to="/settings?tab=account">Profile </Link></DropdownItem>
                <DropdownItem><Link  to="/settings">Settings </Link></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><Link to="/signout">Log out </Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>: null}
          </div>
        </nav>
      </header>
    )
  }
}
const mapStateToProps = state => (
  { authenticated: state.auth.authenticated}
);
export default   connect(mapStateToProps, { toggleMenu, signoutUser })(Header);
