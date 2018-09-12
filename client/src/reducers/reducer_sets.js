import { FETCH_SETS, FETCH_MYSETS } from '../actions/types';
import _ from 'lodash';
import cards from "../containers/cards";
import { handleException } from "./reducer_set";

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_SETS:
      let cardsNumber = 0;
      return _.map(action.payload.data, set => {
        cardsNumber = set.cards.length;
        return {..._.omit(set, 'cards'), cardsNumber}
      });
    case FETCH_MYSETS:
      let owned = action.payload.owned ===undefined ?  {byMultiverseid:{}, multiverseids: [] } : action.payload.owned;

      const mySets = _.keys(owned.byMultiverseid);
      let setsFiltred = _.pick(action.payload.sets, mySets);
      _.each(mySets, set => {
        handleException(setsFiltred[set]);
        const cards = _.filter(setsFiltred[set].cards, card =>
          owned.byMultiverseid[set][card.multiverseid] && (owned.byMultiverseid[set][card.multiverseid].number>0));
        setsFiltred = {...setsFiltred, [set]:{...setsFiltred[set], cards}}
      });
      return {...setsFiltred}
  }
  return state
}
