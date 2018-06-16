import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterSets } from "../actions/index";
import { SetControls } from "../components/set/SetControls";
import { Spinner } from "../components/card/icons/spinner";
import { fetchMySets } from "../actions";
import { fetchMyCards } from "../actions/cards";
import Card  from './card';
import LazyComponent from "../lazyComponent/LazyComponent";

class MyCards extends Component {
  static propTypes = {
    visibilityFilter: PropTypes.object.isRequired,
  };
  componentWillMount() {
    this.props.fetchMyCards();
    this.props.fetchMySets();
  }
  getCards = ( set, myCardsFromThisSet ) => {
    return (
      _.map(set.visibleCards, (multiverseid) => {
        return <Card key={multiverseid} card={set.cards[multiverseid]} set={set} myCard={myCardsFromThisSet[multiverseid]} multiverseid={multiverseid} />
      })
    )};

  getPage = () => {
    const sets = this.props.set;
    return (
      _.map(sets, set => this.props.cards.owned.byMultiverseid[set.code] && _.size(set.cards) ?
        <div className="cardsBox" key={set.code}>
          <h1 className="titleContainer">{set.name}</h1>
          <div className="cardsContent"><LazyComponent classname="cardBox">{this.getCards(set, this.props.cards.owned.byMultiverseid[set.code] )}</LazyComponent></div>
        </div> : null
      )
    )
  };

  isLoading() {
    const { sets, cards } = this.props;
    return _.isEmpty(sets)||_.isEmpty(cards)||(_.isArray(sets))
  }

  doesUserHaveCards() {
    return _.flow(this.getCodeKeys, this.checkCardsOwnedInSet, this.reduceIfUserHasCards)();
  }
  reduceIfUserHasCards = (booleanList) => _.reduce(booleanList, (current, next) => {return current||next });

  checkCardsOwnedInSet = (codeKeys) => _.map(codeKeys, code => this.props.sets[code].cards.length);

  getCodeKeys = () => _.keys(this.props.cards.owned.byMultiverseid);

  render() {
    if (this.isLoading()) return <Spinner />;
    return (
      <div className="set">
        <h1 className="titleContainer">My cards</h1>
        <SetControls visibilityFilter = {this.props.visibilityFilter}/>
        {this.doesUserHaveCards() ? this.getPage() : <h3>You have no cards</h3>}
      </div>
    )
  }
}

const mapStateToProps = state => (
  { set: filterSets(state),
    sets:state.sets,
    cards: state.cards,
    visibilityFilter: state.visibilityFilter}
);

export default  connect(mapStateToProps, { fetchMySets, fetchMyCards } )(MyCards);
