import { FETCH_SET, FETCH_SETS, SET_REVERSER, SET_SORTER, SET_VISIBILITY_FILTER } from './types';
import { getAllSets, getSetFromEdition } from "../components/constantes";
import { filterByColor, filterBySearch, filterByOwn } from "../components/custom/filters/index";
import _  from 'lodash';

export function fetchSets() {
  return  async (dispatch) => {
    const sets = await getAllSets();
      dispatch({
        type: FETCH_SETS,
        payload: sets
      })
  }
}
export function fetchSet(edition) {
  return  async (dispatch, getState) => {
    const
      { set: { code } } = getState(),
      set = await getSetFromEdition(edition);

    if ( code !== name ) {
      dispatch({
        type: FETCH_SET,
        payload: set
      })
    }
  }
}
export const setOrder = (sorter) => {
  return(dispatch) => {
    dispatch({
      type: SET_SORTER,
      sorter
    })
  }
};
export const setReverser = (reverser) => {
  return(dispatch) => {
    dispatch({
      type: SET_REVERSER,
      payload: !!reverser
    })
  }
};
export const setVisibilityFilter = (filter) =>  {
  return (dispatch, getState) => {
    const { visibilityFilter } = getState();

    dispatch({
      type: SET_VISIBILITY_FILTER,
      filter: { ...visibilityFilter, ...filter,}
    })
  }
};
const mapByMultiverseid = (collection) => _.map(collection, object => object["multiverseid"]);

export const filterSet = ({ set, visibilityFilter, cards, sorter, reverser }) => {
  const reverseIfNeeded  = (arr) => reverser ? _.reverse(arr) : arr;
  const visibleCards = _.flow(_.sortBy, mapByMultiverseid, reverseIfNeeded);
  let cardsFiltred = set.cards;

  const FiltersNames = _.keys(visibilityFilter);
  _.forEach(FiltersNames, filterName => {
    const filterCriteria = visibilityFilter[filterName] || [];

    switch(filterName) {
      case 'colors' : cardsFiltred = filterByColor(cardsFiltred, filterCriteria); break;
      case 'own' :  cardsFiltred = filterByOwn(cardsFiltred,filterCriteria, cards.owned );break;
      case 'search' : cardsFiltred = filterBySearch(cardsFiltred, filterCriteria) ;break;
    }
  });

  return {...set, cards:_.keyBy(cardsFiltred, "multiverseid"), visibleCards: visibleCards(cardsFiltred, sorter)}

};
