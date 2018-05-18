import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLinks() {
    if ( this.props.authenticated ) {
      // show a link to sign out
      return <li className="nav-item">
        <Link className="nav-item" to="/signout">Sign out </Link>
      </li>
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-item" to="/signin">Sign In </Link>
        </li>,
        <li className="nav-item"  key={2}>
          <Link className="nav-item" to="/signup">Sign Up </Link>
        </li>

      ]
    }

  }
  render() {
    return (
      <nav className="navbar navbar-light">
        <center><Link className="navbar-brand title" to="/">MANACARD </Link></center>

        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}
const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated
  }
)
export default connect(mapStateToProps, null)(Header);
