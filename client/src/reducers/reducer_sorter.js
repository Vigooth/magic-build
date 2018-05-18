const sorter = (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_SORTER':
      console.log("ICI")
      return action.sorter;
    default:
      return state
  }
};

export default sorter
