import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconUser, Logo } from "./card/icons/icons";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

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
    return (
      <header className="navbar">
        <nav className="nav-item">
          <div className="header-board-buttons">
            <Logo size="64px"/>
          </div>
          <div className="header-title">
            <Link className="title" to="/">MANACARD </Link>
          </div>
          <div className="header-user">
            <UncontrolledDropdown nav inNavbar isOpen={this.state.isOpen} toggle={this.toggle}>
              <DropdownToggle nav>
                <IconUser size="32px"/>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem><Link  to="/settings?tab=account">Profile </Link></DropdownItem>
                <DropdownItem><Link  to="/settings">Settings </Link></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><Link  to="/signout">Log out </Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </nav>
      </header>
    )
  }
}
export default (Header);
