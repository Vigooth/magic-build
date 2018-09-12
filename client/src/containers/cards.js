import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchMyCards } from '../actions/cards';
import  Card  from './card';
import LazyComponent from "../lazyComponent/LazyComponent";
import { Spinner } from "../components/card/icons/spinner";
import Zoom from "../components/card/icons/Zoom";
import { IconCardByImage, IconCardByList } from "../components/card/icons/icons";
import  CardDisplayByList  from "../components/card/CardDisplayByList";
import 'react-table/react-table.css';

class Cards extends Component {
  static propTypes = {
    set: PropTypes.object,
    sets: PropTypes.object,
    template: PropTypes.string,
    scrollId : PropTypes.string,
    cards: PropTypes.object.isRequired,
    fetchMyCards: PropTypes.func.isRequired
  };
  state = {
    displayCard:'image'
  };
  componentWillMount() {
    const { fetchMyCards, set, authenticated } = this.props;
    if (authenticated) {fetchMyCards(set.code)}
  };

  getCards = ( { cards, visibleCards }, myCards = {} ) => {
    const setWithoutCards = _.omit(this.props.set, 'cards');
    return (
      _.map(visibleCards, multiverseid => <Card
        withActions={this.props.authenticated}
        key={multiverseid}
        set={setWithoutCards}
        card={cards[multiverseid]}
        template={this.props.template}
        multiverseid={cards[multiverseid].multiverseid}
        myCard={myCards[multiverseid] || {}}
      />)
    )};
  getCardsList = ( { cards, visibleCards }, myCards = {}) =>{
    const setWithoutCards = _.omit(this.props.set, 'cards');
    return  <CardDisplayByList  set={setWithoutCards} cards={cards} visibleCards={visibleCards} myCards={myCards}/>
  };
  isLoading = () => (
    _.isEmpty(this.props.set) || (_.isEmpty(this.props.cards)&&this.props.authenticated)
  );
  setDisplayOfCards = (name) => {
    this.setState({displayCard: name});
  };
  render() {
    const { set, cards, authenticated } = this.props;
    if ( this.isLoading() ) return <Spinner />;
    const myCards = authenticated ? cards.owned.byMultiverseid[set.code] || {} : {};
    return (
      <div className="cardsBox">
        {this.props.template === null ?
          <h1 className="titleContainer">You have {getCardsOwned(myCards, set.cards) }/{_.size(set.cards)} cards</h1>
          : null}
        <div className="cardsContent" style={{...this.props.style}}>
          <button className='btn-cardsSize' title="Visual" onClick={()=>this.setDisplayOfCards('image')}><IconCardByImage style={{'verticalAlign': 'middle'}}/></button>
          <Zoom />
          <button className='btn-cardsSize' title="list" onClick={()=>this.setDisplayOfCards('list')}><IconCardByList style={{'verticalAlign': 'middle'}}/></button>
          {
            this.state.displayCard ==='image' ? <LazyComponent scrollId={this.props.scrollId} classname="cardBox">{this.getCards(set, myCards)}</LazyComponent>
              : this.getCardsList(set, myCards)
          }
        </div>
      </div>
    )
  }
}

const getCardsOwned = (myCards, cards) => {
  let counter = 0;
  const getMycards = _.filter(myCards, myCard => myCard.number);
  _.forEach(getMycards, myCard => {if (cards[myCard.multiverseid]){counter++}})
  return counter
};

const mapStateToProps = state => (
  { cards: state.cards,
    authenticated: state.auth.authenticated

  }
);
export default connect(mapStateToProps, { fetchMyCards })(Cards);
