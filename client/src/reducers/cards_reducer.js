import { FETCH_MYCARDS, INC_CARD, DEC_CARD } from "../actions/types";
import _ from 'lodash';

const filterByCardsOwned = (cards) => {
  return _.filter(cards, val => (val.number>0))
};

const mapMultiverseid = (cards) => {
  return _.map(cards, item => item.multiverseid)
};

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_MYCARDS:
      const getCardsOwned = _.flow([ filterByCardsOwned, mapMultiverseid ]);
      return { ...state, owned: {multiverseids:getCardsOwned(action.payload) || {}, byMultiverseid:action.payload}};
    case INC_CARD:
      return { ...state };
      case DEC_CARD:
      return { ...state };
  }
  return state;
}
