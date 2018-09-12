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
    this.trickyInit = 1;
    this.props.fetchMyCards();
  }
  trickyFetchingMySets(nextProps) {
    if (this.props.cards.owned === undefined) {
      nextProps.fetchMySets()
    } else {
      if (
        _.size(nextProps.cards.owned.multiverseids)!==_.size(this.props.cards.owned.multiverseids)
        || this.trickyInit === 1) {
        this.trickyInit = 2;
        nextProps.fetchMySets()
      }
    }
    }
  componentWillReceiveProps(props) {
    this.trickyFetchingMySets(props);
  }
  getCards = ( set, myCardsFromThisSet ) => {
    return (
      _.map(set.visibleCards, (multiverseid) => {
        return <Card key={multiverseid} card={set.cards[multiverseid]} set={set} myCard={myCardsFromThisSet[multiverseid]} multiverseid={multiverseid} withActions  />
      })
    )};

  getPage = () => {
    const sets = this.props.set;
    return (
      _.map(sets, set => this.props.cards.owned.byMultiverseid[set.code] && _.size(set.cards) ?
        <div className="cardsBox" key={set.code}>
          <h1 className="titleContainer">{set.name}</h1>
          <div className="cardsContent"><LazyComponent lazyKey={set.code} autoLoading={false} classname={`cardBox`}>{this.getCards(set, this.props.cards.owned.byMultiverseid[set.code] )}</LazyComponent></div>
        </div> : null
      )
    )
  };

  isLoading = () => {
    const { sets, cards } = this.props;
    return _.isEmpty(sets)||_.isEmpty(cards)||(_.isArray(sets))
  };

  doesUserHaveCards = () => {
    return !_.isEmpty(this.props.cards.owned.multiverseids);
  };

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
