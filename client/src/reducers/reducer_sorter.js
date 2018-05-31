import { SET_SORTER } from "../actions/types";

const sorter = (state = {}, action) => {
  switch (action.type) {
    case SET_SORTER:
      return action.sorter;
    default:
      return state
  }
};

export default sorter
