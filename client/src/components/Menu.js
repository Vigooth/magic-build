import React, { Component } from 'react';
import { connect } from "react-redux";
import { IconMenu, Logo } from "./card/icons/icons";
import { toggleMenu } from "../actions/index"
import { Link } from "react-router-dom";
class Menu extends Component {
  componentWillMount() {
    this.props.toggleMenu(false)
  }
  render() {
    const hideEffect = !this.props.sidebarMenu ? "hide" : "";
    return (
      <div className={`menu-overlay ${hideEffect}`}>
        <div className={'menu-overlay-container'}>
        <div className={`menuBox`}>
            <div className="header">
             {/*<Logo size="64px" onLogoClick={this.props.toggleMenu} fillTear="#FD9D1A" fillSun="#aae0fa"/>*/}
              <IconMenu size="28px" onMenuClick={this.props.toggleMenu}/>
            </div>
            <div className="menu-items">
              <div className="item"><Link to="/" onClick={this.props.toggleMenu}><span className="icon"><Logo size="32px" /></span><p>Home</p></Link></div>
              <div className="item"><Link to="/my-decks" onClick={this.props.toggleMenu}><span className="icon"><Logo size="32px" /></span><p>My decks</p></Link></div>
              <div className="item"><Link to="/" onClick={this.props.toggleMenu}><span className="icon"><Logo size="32px" /></span><p>Wish list</p></Link></div>
              <div className="item"><Link to="/my-cards" onClick={this.props.toggleMenu}><span className="icon"><Logo size="32px" /></span><p>All my cards</p></Link></div>
              <div className="item"><Link to="/" onClick={this.props.toggleMenu}><span className="icon"><Logo size="32px" /></span><p>Settings</p></Link></div>
            </div>

          </div>
          {this.props.sidebarMenu ? <div className="overlay" onClick={this.props.toggleMenu }/> : null}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => (
  { sidebarMenu: state.sidebarMenu}
);
export default connect(mapStateToProps, { toggleMenu })(Menu);
