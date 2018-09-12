import { START_UPDATING_MYCARDS, END_UPDATING_MYCARDS } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case START_UPDATING_MYCARDS: {
      return  {...state, card: action.payload}
    }
    case END_UPDATING_MYCARDS : {
      return {...state, card: ""}
    }
  }
  return state;
}
