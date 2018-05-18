import { INC_CARD, DEC_CARD,  FETCH_MYCARDS } from './types'
import axios from "axios/index";
import _ from 'lodash';
const ROOT_URL = 'http://localhost:3090';
function incOrDec(operation, value) {
  switch(operation) {
    case "INC" : return ++value;
    case "DEC" : return value>0 ? --value : 0;
  }
}

export function updateMyCards (action, multiverseid) {
  console.log(action)
  return (dispatch, getState) => {
    const
      { cards : { owned }, set: { code } } = getState(),
      token = localStorage.getItem('token'),
      actualNumber = owned.byMultiverseid[multiverseid]  ? owned.byMultiverseid[multiverseid].number : 0,
      card =  {multiverseid, number :incOrDec(action,actualNumber)};
    axios.post(`${ROOT_URL}/cards/mycards/update`, { token, code, card })
      .then(res =>     {
        dispatch({
          type: FETCH_MYCARDS,
          payload: res.data.myCards[code]
        })}
      )
  }}
export function addCard (card)  {
  return (dispatch) => {
    dispatch({
      type: INC_CARD,
      payload: card
    })
  }
}
export function decCard (card)  {
  return (dispatch) => {
    dispatch({
      type: DEC_CARD,
      payload: card
    })
  }
}
export const fetchMyCards = (code) => {
  return (dispatch, getState) => {
    const token = localStorage.getItem('token');
    axios.post(`${ROOT_URL}/cards/mycards`,  { token, code } )
      .then(res => {
        console.log("res.data",res.data)
        dispatch({
          type: FETCH_MYCARDS,
          payload: res.data

        })
      })

  }
};
