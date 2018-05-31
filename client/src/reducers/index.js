import { combineReducers } from 'redux';
import SetReducer from './reducer_set';
import SetsReducer from './reducer_sets';
import auth_reducer from './auth_reducer'
import cards_reducer from './cards_reducer'
import { reducer as form } from 'redux-form';
import visibilityFilterReducer from './visibilityFilter';
import reducer_sorter from "./reducer_sorter";
import reducer_reverser from "./reducer_reverser";
const rootReducer = combineReducers({
  state: (state = {}) => state,
  set: SetReducer,
  sets: SetsReducer,
  auth:auth_reducer,
  cards: cards_reducer,
  visibilityFilter : visibilityFilterReducer,
  sorter:reducer_sorter,
  reverser: reducer_reverser,
  form
});

export default rootReducer;
