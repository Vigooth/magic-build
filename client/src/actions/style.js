import _  from 'lodash';

export const cardSize = (size) => {
  return (dispatch) => {
    dispatch({
      type: "CHANGE_CARDSSIZE",
      payload: {"cardsSize" : size}
    })
  }
};
