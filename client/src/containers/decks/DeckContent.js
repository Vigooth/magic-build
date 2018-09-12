import React from "react";
import connect from "react-redux/es/connect/connect";
import { insertCardFromDeck, insertDeck, removeCardFromDeck, visibleDeck } from "../../actions/deck";
import { cardScyfallImage, colorsIdentity, convertSymbolColorToRGBA, types } from "../../components/constantes";
import { Button } from "reactstrap";
import { getNumberCardsInADeck } from "../../utils/utils_decks";
import { HandGenerator } from "./HandGenerator";
import _ from "lodash";
import { DeckHeader } from "./DeckHeader";
import { IconDetails } from "../../components/card/icons/icons";
import CardDetails from "../../components/card/CardDetails";
const cardsOrderedByManaCost = (cards) =>_.orderBy(cards,card => getCardManaCost(card));
const DeckContent = ({ deck, decks, insertCardFromDeck, removeCardFromDeck, visibleDeck, insertDeck, sets }) => {
  const decksByTypes = _.groupBy(decks[deck.name], 'types');
  return (
    <div className="cards-from-deck">
      <div className="deck-header">
        <DeckHeader deck = {deck} decks={decks}  visibleDeck={visibleDeck} insertDeck={insertDeck}/>
        <HandGenerator buttonLabel={"Hand"} deck = {decks[deck.name]} />
      </div>
      <div className="scrollbar style-16" style={{width: '100%', height:'70vh'}}>
        <div className='cards'>
          {!_.isEmpty(decks) ?
            (_.isUndefined([deck.name]) ? null
              :_.map(types, type => {
                return  decksByTypes[type] ? [<h4 key={type} style={{fontStyle:'italic'}}>{type} ({getNumberCardsInADeck(decksByTypes[type])})</h4>,
                    getCards(decksByTypes[type], deck.name, insertCardFromDeck, removeCardFromDeck, sets)]
                  : null}
              )): null}
        </div>
      </div>
    </div>
  )
};

const convertColorsCodeToRGBAWithLength = (array) => {
  const arrayLength = array.length;
  let rgba;
  return _.map(array, (color, i) => {
    rgba = convertSymbolColorToRGBA(color, 0.8);
    switch (i) {
      case 0 :return  `${rgba} ${0.01 + (i+1)*(100/arrayLength)}%`;
      case arrayLength - 1 :return  `${rgba} ${(i)*(100/arrayLength)}%`;
      default : return [`${rgba} ${i * (100/arrayLength)}%`, `${(i+1) *(100/arrayLength)}%`]
    }
  });
};
const joinWithComma = (val) => _.join(val,', ');
const linearColors = (colorsIdentities) =>_.flow(convertColorsCodeToRGBAWithLength,_.flattenDeep, joinWithComma)(colorsIdentities);

const backGroundImage = (array) => {
  if (_.isUndefined(array)) return;
  switch (array.length) {
    case 1 : return {backgroundColor:`${_.join(_.map(array , color => convertSymbolColorToRGBA(color, 0.8)), ' ')}`};
    default : return {background:`linear-gradient(to right, ${linearColors(array)})`};
  }
};
const getCardManaCost = ({manaCost}) => {
  const arrayManaCost = _.words(manaCost);
  return _.indexOf(colorsIdentity,arrayManaCost[0]) ===-1 ? _.toInteger(arrayManaCost[0]) + _.words(manaCost).length -1 : arrayManaCost.length
}
const getCards = (cards, deckName, insertCardFromDeck, removeCardFromDeck, sets) => _.map((cardsOrderedByManaCost(cards) ), card => {
  return (
    <div className={"card"} key={card.multiverseid} style={{backgroundColor:'#74787a'}}>
      <span style={{...backGroundImage(card.colorIdentity)}} onClick={() => insertCardFromDeck(deckName, card)}>
        {`${card.quantity} ${card.name}`}
        <img src={ cardScyfallImage(card.number, card.code, 'en', 'normal' )} />
      </span>
      <span style={{ padding: '2px',justifyContent:'space-between',display:'flex', width:'45px',position: 'absolute', right:'5px'}} >
        <CardDetails style={{ padding: '0', width: '20px', background: '#74787a', border: '2px solid black'}} set={sets[card.code]} card={card}><IconDetails style={{display: 'flex'}} width={"17px"} height={"100%"}/></CardDetails>
        <Button style={{fontSize: '14px', padding: '0', width: '20px', backgroundColor: '#74787a', border: '2px solid black'}} onClick={() => removeCardFromDeck(deckName, card.multiverseid)}>X</Button>
      </span>
    </div>
  )});

const mapStateToProps = state => (
  {
    decks:state.decks,
    deck:state.deck,
    sets: _.keyBy(state.sets, "code")
  }
);

export default  connect(mapStateToProps, { insertDeck, insertCardFromDeck, removeCardFromDeck, visibleDeck })(DeckContent)
