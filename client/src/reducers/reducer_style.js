
const initState = {
  cardsSize : "medium"
};
export default function(state = initState, action) {
  switch(action.type) {
    case "CHANGE_CARDSSIZE":
      return {...state, ...action.payload}

  }
  return state

}
