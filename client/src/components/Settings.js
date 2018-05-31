import React, { Component } from 'react';
import { Link } from "react-router-dom";
import General from "./settings/general/General";

class Settings extends Component {

  renderTab() {
    switch (this.props.match.params.settings) {
      case "general": return <General />;
      case "cards":return null
    }
  }
  render() {
    const { match : { params } } = this.props;
    return (<div>
        <h2>{ params.settings }</h2>
        <ul>
          <li>
            <Link to="/settings/general">General</Link>
          </li>
          <li>
            <Link to="/settings/cards">Cards</Link>
          </li>
        </ul>
        {this.renderTab()}

      </div>

    )
  }
}
export default Settings
