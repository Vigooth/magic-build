import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardDetails from "./cardDetails";
import { IconPlus, IconMinus } from "../components/custom/icons/icons";
import { cardScyfallImage } from "../components/constantes";
import { fetchMyCards, updateMyCards } from "../actions/cards";



const findCardInSet = ( cards, multiverseid ) => {
  return _.find(cards, { multiverseid })
};

class Card extends Component {
  static propTypes = {
    set: PropTypes.object.isRequired,
    cards: PropTypes.object.isRequired,
    updateMyCards: PropTypes.func.isRequired,
    multiverseid: PropTypes.number.isRequired,
  };
  state = {
    imageLoaded :false

  };
  onImageLoaded = () => {
    this.setState({ imageLoaded: true });
  };

  render(){
    const
      preload = this.state.imageLoaded ? '' : 'image-preload',
      visibility = this.state.imageLoaded ? 'visible' : 'hidden',
      { cards : { owned }, set, multiverseid, updateMyCards  } = this.props,
      card                                                     = set.cards[multiverseid],
      cardOwned                                                = owned.byMultiverseid[multiverseid] || {},
      addCssIfCardIsOwned                                      = cardOwned.number ? 'owned' : '';

    return(
      <div className={`cardBox ${preload}`}>
        <img  className={`placeholder ${addCssIfCardIsOwned} ${preload}`} style={{visibility}} onLoad={this.onImageLoaded} src={ cardScyfallImage(card.number, set.magicCardsInfoCode, 'en', 'normal' )} />
        <div className="cardActions">
          <div className="front">
            <div className="top" />
            <div className="middle">
            </div>
            <div className="bottom">
              <div className="copiesNumber"><span >{cardOwned.number || null}</span></div>
            </div>
          </div>
          <div className="back">
            <div className="top" />
            <div className="middle">
              <CardDetails buttonLabel="Details" set={ _.omit(set, 'cards') } card={ findCardInSet(set.cards, multiverseid) }/>
            </div>
            <div className="bottom">
              <div className="copiesNumber">
                <span className="minus" onClick={() => updateMyCards("DEC", multiverseid)}><IconMinus size="25px" color="#e0c6d0" /></span>
                <span >{cardOwned.number || 0}</span>
                <span className="plus" onClick={() => updateMyCards("INC", multiverseid)}><IconPlus size="25px" color="#e0c6d0"/></span>
              </div>
            </div>
          </div>
        </div>
      </div>)

  }
}

export default connect(null, { fetchMyCards, updateMyCards })(Card);
