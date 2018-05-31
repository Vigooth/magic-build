import { FETCH_SETS } from '../actions/types';
import _ from 'lodash';
import cards from "../containers/cards";

export default function(state = {}, action) {
  switch(action.type){
    case FETCH_SETS:
      let cardsNumber = 0;
      return _.map(action.payload.data, set => {
        cardsNumber = set.cards.length;
        return {..._.omit(set, 'cards'), cardsNumber}
      })
  }
  return state
}
