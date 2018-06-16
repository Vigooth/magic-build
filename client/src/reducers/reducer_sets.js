import { FETCH_SETS, FETCH_MYSETS } from '../actions/types';
import _ from 'lodash';
import cards from "../containers/cards";

export default function(state = {}, action) {
  switch(action.type){
    case FETCH_SETS:
      let cardsNumber = 0;
      return _.map(action.payload.data, set => {
        cardsNumber = set.cards.length;
        return {..._.omit(set, 'cards'), cardsNumber}
      });
    case FETCH_MYSETS:
      const mySets = _.keys(action.payload.owned.byMultiverseid);
      let setsFiltred = _.pick(action.payload.sets.data, mySets);
      _.each(mySets, set => {
        const cards = _.filter(setsFiltred[set].cards, card =>
          action.payload.owned.byMultiverseid[set][card.multiverseid]&& (action.payload.owned.byMultiverseid[set][card.multiverseid].number>0))
        setsFiltred = {...setsFiltred, [set]:{...setsFiltred[set], cards}}
      });
      return {...setsFiltred}
  }
  return state
}
