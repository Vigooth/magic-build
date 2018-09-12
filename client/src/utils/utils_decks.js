
const mapQuantity = (deck) => {
  return _.map(deck, card => card.quantity)
};
const reduceFct = (arr, func) => {
  return _.reduce(arr, func)
};
const getNumberCardsInADeck = (val) => {
  return _.flow(mapQuantity, (a) =>reduceFct(a,_.add))(val)|| 0
};

export { getNumberCardsInADeck };
