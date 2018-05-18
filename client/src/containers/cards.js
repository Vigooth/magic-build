import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchMyCards, addCard, decCard, updateMyCards } from '../actions/cards';
import { Card } from './card';

class Cards extends Component {

  componentWillMount() {
    const { fetchMyCards, match: { params } } = this.props;
    fetchMyCards(params.set);
  };

  getCards = ( { cards } ) => (
    _.map(cards, card => <Card key={card.multiverseid}  props={this.props} {...card} />)
    );

  setOrCardsIsNotReady = (set, cards) => (
    _.isEmpty(set) ||_.isEmpty(cards)
  );

  render(){
    const { set, cards } = this.props;
    console.log("cards", cards)
    console.log("set", set)
    if ( this.setOrCardsIsNotReady(set, cards) ) return <div>Loading...</div>;
    console.log("MULTIVERSEIDS,",cards.owned.multiverseids);
    console.log("cardDisplayed", set.cards)


    const getCardsOwned = _.flow([ filterByCardsOwned, _.size ]);

    return (
      <div className="cardsBox">
        <h1 className="titleContainer">You have {getCardsOwned(cards.owned.multiverseids,set.cards) }/{_.size(set.cards)} cards</h1>
        <div className="cardsContent">
          {this.getCards(set)}
        </div>
      </div>
    )
  }
}
const filterByCardsOwned = (array, collection) => {
  console.log(collection);
  console.log(_.every(array, _.isObject));
  console.log(array);
  console.log(_.compact(_.map(array, item => collection[item] )));
  return _.compact(_.map(array, item => collection[item] ));
};
const mapMultiverseid = (cards) => {
  return _.map(cards, item => item.multiverseid)
};
const mapStateToProps = state => (
  { cards: state.cards,
    userId:state.auth.id
  }
);
export default connect(mapStateToProps, { fetchMyCards, addCard, decCard, updateMyCards })(Cards);
