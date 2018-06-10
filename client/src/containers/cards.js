import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchMyCards } from '../actions/cards';
import  Card  from './card';
import LazyComponent from "../lazyComponent/LazyComponent";
import { Spinner } from "../components/card/icons/spinner";

class Cards extends Component {
  static propTypes = {
    set: PropTypes.object.isRequired,
    cards: PropTypes.object.isRequired,
    fetchMyCards: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { fetchMyCards, set: { code } } = this.props;
    fetchMyCards(code);
  };

  getCards = ( { cards, visibleCards } ) => (
    _.map(visibleCards, card => <Card key={card} cards={this.props.cards} set={this.props.set} multiverseid={cards[card].multiverseid} />)
    );

  setOrCardsIsNotReady = (set, cards) => (
    _.isEmpty(set) ||_.isEmpty(cards)
  );

  render() {
    const { set, cards } = this.props;
    if ( this.setOrCardsIsNotReady(set, cards) ) return <Spinner />;

    const numberOfcardsOwned = getCardsOwned(cards.owned.multiverseids,set.cards);

    return (
      <div className="cardsBox">
        <h1 className="titleContainer">You have {numberOfcardsOwned }/{_.size(set.cards)} cards</h1>
        <div className="cardsContent">
          <LazyComponent classname="cardBox">{this.getCards(set)}</LazyComponent>
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
