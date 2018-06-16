import { FETCH_MYCARDS, ROOT_URL } from './types'
import axios from "axios/index";

const UPDATE_MY_CARDS_URL = `${ROOT_URL}/cards/mycards/update`;
const FETCH_MY_CARDS_URL = `${ROOT_URL}/cards/mycards`;
function incOrDec(operation, value) {
  switch(operation) {
    case "INC" : return ++value;
    case "DEC" : return (value>0) ? --value : 0;
  }
}

export function updateMyCards (action, multiverseid, code, number) {
  return (dispatch, getState) => {
      const token = localStorage.getItem('token'),
      actualNumber = number || 0,
      card =  {multiverseid, number : incOrDec(action,actualNumber)};
    axios.post(UPDATE_MY_CARDS_URL, { token, code, card })
      .then(res =>     {
        dispatch({
          type: FETCH_MYCARDS,
          payload: res.data.myCards
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
