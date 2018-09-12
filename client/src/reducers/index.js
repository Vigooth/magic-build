import { combineReducers } from 'redux';
import SetReducer from './reducer_set';
import SetsReducer from './reducer_sets';
import auth_reducer from './auth_reducer'
import cards_reducer from './cards_reducer'
import card_reducer from './reducer_card'
import { reducer as form } from 'redux-form';
import visibilityFilterReducer from './visibilityFilter';
import reducer_sorter from "./reducer_sorter";
import reducer_deck from "./reducer_deck";
import reducer_decks from "./reducer_decks";
import reducer_reverser from "./reducer_reverser";
import reducer_style from "./reducer_style";
import loading from "./reducer_loading";
import sidebarMenu from "./reducer_sidebarMenu"

const rootReducer = combineReducers({
  state: (state = {}) => state,
  set: SetReducer,
  sets: SetsReducer,
  auth:auth_reducer,
  card: card_reducer,
  cards: cards_reducer,
  deck: reducer_deck,
  decks: reducer_decks,
  visibilityFilter : visibilityFilterReducer,
  sorter:reducer_sorter,
  reverser: reducer_reverser,
  style: reducer_style,
  sidebarMenu,
  loading,
  form
});

export default rootReducer;
