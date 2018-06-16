//import {AUTH_ERROR, AUTH_USER, UNAUTH_USER} from "../actions/types";

export default function(state = {}, action) {

  switch(action.type) {
    case 'TOGGLE_MENU':
      return action.payload ;
  }
  return state;
}
