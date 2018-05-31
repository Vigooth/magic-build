import { FETCH_MYCARDS } from './types'
import axios from "axios/index";
const ROOT_URL = 'http://localhost:3090';
const UPDATE_MY_CARDS_URL = `${ROOT_URL}/cards/mycards/update`;
const FETCH_MY_CARDS_URL = `${ROOT_URL}/cards/mycards`;
function incOrDec(operation, value) {
  switch(operation) {
    case "INC" : return ++value;
    case "DEC" : return (value>0) ? --value : 0;
  }
}

export function updateMyCards (action, multiverseid) {
  return (dispatch, getState) => {
    const
      { cards : { owned }, set: { code } } = getState(),
      token = localStorage.getItem('token'),
      actualNumber = owned.byMultiverseid[multiverseid]  ? owned.byMultiverseid[multiverseid].number : 0,
      card =  {multiverseid, number : incOrDec(action,actualNumber)};
    axios.post(UPDATE_MY_CARDS_URL, { token, code, card })
      .then(res =>     {
        dispatch({
          type: FETCH_MYCARDS,
          payload: res.data.myCards[code]
        })}
      )
  }}


export const fetchMyCards = (code) => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    axios.post(FETCH_MY_CARDS_URL,  { token, code } )
      .then(res => {
        dispatch({
          type: FETCH_MYCARDS,
          payload: res.data

        })
      })

  }
};
