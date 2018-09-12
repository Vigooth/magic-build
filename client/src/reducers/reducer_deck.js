import { SET_VISIBLE_DECK } from '../actions/types';

export default function(state = {name: null}, action) {
  switch(action.type) {
    case SET_VISIBLE_DECK:
      return  {...state.deck, name: action.payload }
  }
  return state
}
