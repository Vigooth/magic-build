import axios from "axios";
import { getAllSets } from "../components/constantes";
import { ROOT_URL, FETCH_MY_DECKS, SET_VISIBLE_DECK, DECK_CARD_INSERTED, DECK_CARD_REMOVED, DECK_INSERTED } from './types'

const FETCH_MY_DECKS_URL = `${ROOT_URL}/cards/get-decks`;
const INSERT_MY_DECKS_URL = `${ROOT_URL}/deck/insert`;
const REMOVE_CARD_FROM_DECKS_URL = `${ROOT_URL}/deck/card/remove`;
const INSERT_CARD_FROM_DECKS_URL = `${ROOT_URL}/deck/card/insert`;

export const visibleDeck = (name) => {
  return  (dispatch) => {
    dispatch({
      type: SET_VISIBLE_DECK,
      payload: name
    })
  }
};

export const fetchMyDecks = () => {
  return  async (dispatch) => {
    const token = localStorage.getItem('token');
    const allSets = await getAllSets();

    axios.post(FETCH_MY_DECKS_URL,  { token } )
      .then(async res => {
        const {decks} = res.data;
        dispatch({
          type: FETCH_MY_DECKS,
          payload: {decks, allSets}

        })
      })
  }
};
export const insertCardFromDeck = (deckName, card) => {
  return dispatch => {
    const token = localStorage.getItem('token');
    axios.post(INSERT_CARD_FROM_DECKS_URL, { token, deckName, card, })
      .then(res => {
          dispatch({
            type: DECK_CARD_INSERTED,
            payload:res.data
          })
        }
      )
  }
};
export const insertDeck = (name) => {
  const token = localStorage.getItem('token');
  return dispatch => {
    axios.post(INSERT_MY_DECKS_URL, {token, name})
      .then(res => {
          dispatch({
            type: DECK_INSERTED,
            payload:res.data
          })
        }
      )
  }
};
export const removeCardFromDeck = (deckName, multiverseId) => {
  return dispatch => {
    const token = localStorage.getItem('token');
    axios.post(REMOVE_CARD_FROM_DECKS_URL, { token, deckName, multiverseId, })
      .then(res => {
          dispatch({
            type: DECK_CARD_REMOVED,
            payload:res.data
          })
        }
      )
  }
};
