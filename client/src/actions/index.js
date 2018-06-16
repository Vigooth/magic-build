import { FETCH_MYSETS, FETCH_SET, FETCH_SETS, SET_REVERSER, SET_SORTER, SET_VISIBILITY_FILTER } from './types';
import { getAllSets, getSetFromEdition } from "../components/constantes";
import { filterByColor, filterBySearch, filterByOwn } from "../components/set/filters/index";
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
export function fetchMySets() {
  return  async (dispatch, getState) => {
    const sets = await getAllSets();
    const { cards : { owned } } = getState();
      dispatch({
        type: FETCH_MYSETS,
        payload: {owned,sets }
      })
  }
}
export const toggleMenu = () => {
  return  (dispatch, getState) => {
    const { sidebarMenu } = getState();
    dispatch({
      type: 'TOGGLE_MENU',
      payload: !sidebarMenu
    })
  }
};
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
  if(_.isEmpty(set))return {}
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

  return {[set.code]:{...set, cards:_.keyBy(cardsFiltred, "multiverseid"), visibleCards: visibleCards(cardsFiltred, sorter)}}

};
export const filterSets = ({ sets, visibilityFilter, cards, sorter, reverser }) => {
  if(_.isEmpty(sets) || _.isArray(sets)) return {};
  const reverseIfNeeded  = (arr) => reverser ? _.reverse(arr) : arr;
  const visibleCards = _.flow(_.sortBy, mapByMultiverseid, reverseIfNeeded);
  const setsKeys = _.keys(sets)
  let final = sets;
  _.forEach(setsKeys, code => {
    let newSet = {}
    let cardsFiltred = _.keyBy(sets[code].cards, "multiverseid");
    const FiltersNames = _.keys(visibilityFilter);
    _.forEach(FiltersNames, filterName => {
      const filterCriteria = visibilityFilter[filterName] || [];
      switch(filterName) {
        case 'colors' : cardsFiltred = filterByColor(cardsFiltred, filterCriteria); break;
        case 'own' :  cardsFiltred = filterByOwn(cardsFiltred,filterCriteria, cards.owned );break;
        case 'search' : cardsFiltred = filterBySearch(cardsFiltred, filterCriteria) ;break;
      }
    });

    newSet =  {...sets[code], cards:_.keyBy(cardsFiltred, "multiverseid"), visibleCards: visibleCards(cardsFiltred, sorter)};
    final = {...final, [code]:newSet}
  });

  return final

};
