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
    set: PropTypes.object,
    sets: PropTypes.object,
    mode: PropTypes.string,
    cards: PropTypes.object.isRequired,
    fetchMyCards: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { fetchMyCards, set } = this.props;
    fetchMyCards(set.code);
  };

  getCards = ( { cards, visibleCards }, myCards ) => {
    const setWithoutCards = _.omit(this.props.set, 'cards');
    return(
      _.map(visibleCards, multiverseid => <Card
        key={multiverseid}
        set={setWithoutCards}
        card={cards[multiverseid]}
        multiverseid={cards[multiverseid].multiverseid}
        myCard={myCards[multiverseid] || {}}
      />)
    )};

  setOrCardsIsNotReady = (set, cards) => (
    _.isEmpty(set) ||_.isEmpty(cards)
  );

  render() {
    const { set, cards } = this.props;
    if ( this.setOrCardsIsNotReady(set, cards) ) return <Spinner />;
    const
      myCards = cards.owned.byMultiverseid[set.code] || {},
      numberOfcardsOwned = getCardsOwned(_.keys(myCards),set.cards);

    return (
      <div className="cardsBox">
        <h1 className="titleContainer">You have {numberOfcardsOwned }/{_.size(set.cards)} cards</h1>
        <div className="cardsContent">
          <LazyComponent classname="cardBox">{this.getCards(set, myCards)}</LazyComponent>
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
  { cards: state.cards
  }
);
export default connect(mapStateToProps, { fetchMyCards })(Cards);
