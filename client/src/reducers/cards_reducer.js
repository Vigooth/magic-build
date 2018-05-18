import { FETCH_MYCARDS, INC_CARD, DEC_CARD } from "../actions/types";
import _ from 'lodash';
const remove = (array, values) => {
  if (_.indexOf(array, values)===-1) {
    return [...array, values]
  } else {
    return _.without(array, values)
  }
};
const filterByCardsOwned = (cards) => {
  return _.filter(cards, val => (val.number>0))
};
const mapMultiverseid = (cards) => {
  return _.map(cards, item => item.multiverseid)
};
export default function(state = {}, action) {
  console.log("reducer_card", state)
  switch(action.type) {
    case FETCH_MYCARDS:
      const getCardsOwned = _.flow([ filterByCardsOwned, mapMultiverseid ]);
      console.log("reducer_card_test", _.map(_.filter(action.payload, val => (val.number>0)), card => card.multiverseid))
      console.log("reducer_card_test",getCardsOwned(action.payload))

      return { ...state, owned: {multiverseids:getCardsOwned(action.payload) || {}, byMultiverseid:action.payload}};
    case INC_CARD:
      return { ...state };
      case DEC_CARD:
      return { ...state };
  }
  return state;
}
