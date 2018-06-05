import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import thunk from "redux-thunk";
import { AUTH_USER } from "./actions/types";

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
if (token) {
  store.dispatch({type:AUTH_USER})
}
export { store };
