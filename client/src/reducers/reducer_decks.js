import _ from 'lodash';
import { DECK_CARD_INSERTED, DECK_CARD_REMOVED, DECK_INSERTED, FETCH_MY_DECKS } from "../actions/types";
const getDecksWithCards = (decks, allSets) => {
  const
    deckNames = _.keys(decks);
  let
    finalDecks = {},
    tmpDeck = {}, tempCards = {};
  _.forEach(deckNames, deckName=> {
    const setNames = _.keys(decks[deckName]);
    tmpDeck = {};
    tempCards = {};
    _.forEach(setNames, setName => {
      const multiverseIds = _.keys(decks[deckName][setName]);
      _.each(multiverseIds, multiverseId => {
          const
             quantity  = decks[deckName][setName][multiverseId].number,
            card =  { [multiverseId]:{..._.find(allSets.data[setName].cards, (card) => card.multiverseid === _.parseInt(multiverseId)), quantity, code:setName}};
          tempCards = {...tempCards,  ...card};
        }
      );
    });
    tmpDeck = {[deckName] : tempCards}

    finalDecks = {...finalDecks, ...tmpDeck }
  });
  return finalDecks
};

export default function(state = null, action) {
  switch(action.type){
    case FETCH_MY_DECKS:
      const
        { decks, allSets } = action.payload;
      return  {...state, ...getDecksWithCards(decks,allSets) };
    case DECK_INSERTED:
      return  {...state, ...action.payload } ;
    case DECK_CARD_REMOVED:
         const { deckName, set, multiverseId, number } = action.payload;
         !number ? state[deckName]=_.omit(state[deckName], multiverseId) : state[deckName][multiverseId].quantity = number;
      return  {...state};
    case DECK_CARD_INSERTED:
      const {card} = action.payload;
        state[action.payload.deckName] = {...state[action.payload.deckName], [card.multiverseid]:card}
      return  {...state}
  }
  return state
}
