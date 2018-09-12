import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { cardScyfallImage } from "../components/constantes";
import { startLoading, updateMyCards } from "../actions/cards";
import { insertCardFromDeck } from "../actions/deck";
import { CardActions } from "../components/card/CardActions";

class Card extends Component {
  static propTypes = {
    set: PropTypes.object.isRequired,
    card: PropTypes.object,
    updateMyCards: PropTypes.func.isRequired,
    multiverseid: PropTypes.number.isRequired,
    myCard: PropTypes.object,
  };

  state = {
    imageLoaded :false
  };

  onImageLoaded = () => {
    this.setState({ imageLoaded: true });
  };

  render() {
    const
      imgPreload                                              = this.state.imageLoaded ? '' : 'image-preload',
      visibility                                              = this.state.imageLoaded ? 'visible' : 'hidden',
      { set, updateMyCards, withActions, card, startLoading } = this.props,
      addCssIfCardIsOwned                                     = this.props.myCard.number ? 'owned' : '';

    return (
      <div className={`cardBox ${imgPreload} ${this.props.style.cardsSize}`} >
        <img
          className={`placeholder ${addCssIfCardIsOwned} ${imgPreload}`}

          style={{visibility }} onLoad={this.onImageLoaded}
          src={ cardScyfallImage(card.number, set.code, 'en', 'normal' )} />
        {withActions ?
          <CardActions
            updateMyCards={updateMyCards}
            set={set}
            card={card}
            template={this.props.template}
            loading={this.props.loading}
            insertCardFromDeck={this.props.insertCardFromDeck}
            startLoading={startLoading}
            cardOwned={this.props.myCard}/> :
          null}
      </div>)
  }
}
const mapStateToProps = state => (
  { style: state.style,
    loading: state.loading.card
  }
);
export default connect(mapStateToProps, { updateMyCards, startLoading, insertCardFromDeck })(Card);
