import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchMyCards } from '../actions/cards';
import  Card  from './card';
import LazyComponent from "../LazyComponent";

class Cards extends Component {
  static propTypes = {
    set: PropTypes.object.isRequired,
    cards: PropTypes.object.isRequired,
    fetchMyCards: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        set: PropTypes.string,
      }).isRequired,
    }).isRequired
  };
  componentWillMount() {
    const { fetchMyCards, match: { params } } = this.props;
    fetchMyCards(params.set);
  };

  getCards = ( { cards, visibleCards } ) => (
    _.map(visibleCards, card => <Card key={card}  {...this.props} multiverseid={cards[card].multiverseid} />)
    );

  setOrCardsIsNotReady = (set, cards) => (
    _.isEmpty(set) ||_.isEmpty(cards)
  );

  render() {
    const { set, cards } = this.props;
    if ( this.setOrCardsIsNotReady(set, cards) ) return <div>Loading...</div>;

    const numberOfcardsOwned = getCardsOwned(cards.owned.multiverseids,set.cards);

    return (
      <div className="cardsBox">
        <h1 className="titleContainer">You have {numberOfcardsOwned }/{_.size(set.cards)} cards</h1>
        <div className="cardsContent">
          <LazyComponent>{this.getCards(set)}</LazyComponent>
        </div>
      </div>
    )
  }
}
const filterByCardsOwned = (array, collection) => {
  return _.compact(_.map(array, item => collection[item] ));
};
const getCardsOwned = _.flow([ filterByCardsOwned, _.size ]);

const mapStateToProps = state => (
  { cards: state.cards,
  }
);
export default connect(mapStateToProps, { fetchMyCards })(Cards);
