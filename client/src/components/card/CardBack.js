import React, { Component } from 'react';
import _ from 'lodash';
import CardDetails from "./CardDetails";
import { IconMinus, IconPlus, IconWishList } from "./icons/icons";
import {deckTemplate} from './templates/back/Deck'
import {defaultTemplate} from './templates/back/Default'

export class CardBack extends Component {
  state = {
    numberOfCardOwned: this.props.cardOwned.number || 0
  };



  templates = () => {
    const {template} = this.props;
     switch (template) {
      case 'deck': return deckTemplate(this.props, this.state.numberOfCardOwned);
       default: return defaultTemplate(this.props)

    }
  }
  render() {
    const template = this.templates();
    return (
      <div className="back">
        <div className="top">
          {template.top()}
        </div>
        <div className="middle">
          {template.middle()}
        </div>
        <div className="bottom">
          {template.bottom()}

        </div>
      </div>
    )
  }
}

