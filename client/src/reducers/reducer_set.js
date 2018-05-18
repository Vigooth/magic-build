import { FETCH_SET } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type){
    case FETCH_SET:
      const cardsByMultiverseid = _.mapKeys(action.payload.data.cards, 'multiverseid');
      return  {...action.payload.data, cards:cardsByMultiverseid }
  }
  return state
}
