import { FETCH_SET } from '../actions/types';
import _ from 'lodash';
const setNumberCard = (number, letter)=> {
  if (letter)return number+letter;
  return _.words(number)[0]
};
const alphabet = "abcdefghijklmnopqrstuvwxyz";
export const handleException = (set) => {
  if (set.code !=="BBD" && set.code !=="UST" && set.code !=="AKH") return;
  switch (set.code) {
    case "BBD": {
      let numbers = [...Array(46).keys(), 278, 279];
      _.forEach(numbers, (number) => {set.cards[number].number = setNumberCard(set.cards[number].number)});break;
    }
    case "AKH": {
      let numbers = [127 , ..._.map([...Array(29).keys()], number => number + 210)];
      _.forEach(numbers, (number) => {
        const cardNumber = set.cards[number].number;
        set.cards[number].number = setNumberCard(_.words(cardNumber)[0], _.words(cardNumber)[1] ? 'a': null )});break;
    }
    case "UST": {
      let numbers =
        [['2', '3', '4', '5'], ['14', '15','16', '17', '18', '19'], ['48','49', '50', '51'], ['59','60', '61', '62','63', '64'],
          ['69','70', '71', '72'], ['85','86','87','88', '89','90'],['105', '106', '107','108', '109','110'],
          ['126', '127', '128', '129'], ['134', '135', '136', '137'], ['147', '148','149','150', '151', '152'], ['184', '185', '186' ,'187'],
          ['189', '190','191', '192', '193', '194'], ['212', '213', '214', '215', '216']];
      _.forEach(numbers, (gtoupNumber) => {
        _.forEach(gtoupNumber, (number, i) => {
          set.cards[number].number = setNumberCard(set.cards[number].number, alphabet[i])

        })
      })
      ;break;
    }
    default : return set
  }
  return set
}
export default function(state = {}, action) {
  switch(action.type){
    case FETCH_SET:
      handleException(action.payload.data);
      const cardsByMultiverseid = _.mapKeys(action.payload.data.cards, 'multiverseid');
      return  {...action.payload.data, cards:cardsByMultiverseid }
  }
  return state
}
