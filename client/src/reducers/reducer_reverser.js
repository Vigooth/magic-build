import { SET_REVERSER } from "../actions/types";

const reverser = (state = false, action) => {
  switch (action.type) {
    case SET_REVERSER:
      return action.payload;
    default:
      return state
  }
};

export default reverser
