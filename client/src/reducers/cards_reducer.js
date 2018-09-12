import { FETCH_MYCARDS, INC_CARD, DEC_CARD } from "../actions/types";
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_MYCARDS:
      let multiverseids = action.payload;
      const
        getCardsOwned = _.flow([filterByCardsOwned, mapMultiverseid]),
        keys = _.keys(action.payload);
      _.forEach(keys, key => {
        const newMultiverseId = getCardsOwned(action.payload[key]);
        if (newMultiverseId.length === 0) {
          multiverseids = _.omit(multiverseids, key);
          return
        }
        multiverseids = {...multiverseids, [key]: newMultiverseId}
      });
      return {
        ...state, owned: {multiverseids, byMultiverseid: action.payload}
      };
  }
  return state;
}
const filterByCardsOwned = (cards) => {
  return _.filter(cards, val => (val.number))
};

const mapMultiverseid = (cards) => {
  return _.map(cards, item => item.multiverseid)
};
