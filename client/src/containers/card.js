import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { cardScyfallImage } from "../components/constantes";
import { fetchMyCards, updateMyCards } from "../actions/cards";
import { CardActions } from "../components/card/CardActions";

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

  render() {
    const
      preload                                                 = this.state.imageLoaded ? '' : 'image-preload',
      visibility                                              = this.state.imageLoaded ? 'visible' : 'hidden',
      { cards : { owned }, set, multiverseid, updateMyCards } = this.props,
      card                                                    = set.cards[multiverseid],
      cardOwned                                               = owned.byMultiverseid[multiverseid] || {},
      addCssIfCardIsOwned                                     = cardOwned.number ? 'owned' : '';
    return (
      <div className={`cardBox ${preload}`}>
        <img
          className={`placeholder ${addCssIfCardIsOwned} ${preload}`}
          style={{visibility}} onLoad={this.onImageLoaded}
          src={ cardScyfallImage(card.number, set.code, 'en', 'normal' )} />
        <CardActions
          updateMyCards={updateMyCards}
          set={set}
          multiverseid={multiverseid}
          cardOwned={cardOwned}/>
      </div>)
  }
}

export default connect(null, { fetchMyCards, updateMyCards })(Card);
