import { FETCH_MYCARDS, START_UPDATING_MYCARDS, END_UPDATING_MYCARDS, ROOT_URL } from './types'
import axios from "axios/index";
import _ from 'lodash'
const UPDATE_MY_CARDS_URL = `${ROOT_URL}/cards/mycards/update`;
const FETCH_MY_CARDS_URL = `${ROOT_URL}/cards/mycards`;

const dispatchMyCards =  (dispatch, myCards) => {
  dispatch({
    type: FETCH_MYCARDS,
    payload: myCards
  })
};

export const startLoading = (type, multiverseid) => {
  return async (dispatch) => {
    dispatch({
      type,
      payload: multiverseid
    })
  }
};
const endLoading = (dispatch, type) => {
  dispatch({
    type
  })
};


export function updateMyCards(multiverseid, code, number) {
  return async (dispatch) => {
    const
      token = localStorage.getItem('token'),
      card = { multiverseid, number },
      response = await axios.post(UPDATE_MY_CARDS_URL, { token, code, card });

    dispatchMyCards(dispatch, response.data.myCards)
    endLoading(dispatch, END_UPDATING_MYCARDS)
  }
}


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

export const addNewCard = (card) => {
  return  (dispatch) => {
    dispatch({
      type: 'NEW_CARD',
      payload: card
    })
  }
}



