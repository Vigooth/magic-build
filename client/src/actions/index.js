import { FETCH_MYSETS, FETCH_SET, FETCH_SETS, SET_REVERSER, SET_SORTER, SET_VISIBILITY_FILTER } from './types';
import { getAllSets, getSetFromEdition } from "../components/constantes";
import { filterByColor, filterBySearch, filterByOwn } from "../components/set/filters/index";
import _  from 'lodash';
import { fetchMyCards } from "./cards";

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
    const { cards : { owned } } =  getState();
    dispatch({
      type: FETCH_MYSETS,
      payload: { owned, sets:{...sets.data} }
    })
  }
}
export const toggleMenu = () => {
  return  (dispatch, getState) => {
    const { sidebarMenu } = getState();
    dispatch ({
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
      return dispatch({
        type: FETCH_SET,
        payload: set
      });
      return set.data;
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

export const filterSet = ({ set, visibilityFilter, cards, sorter, reverser, authenticated }) => {
  const reverseIfNeeded  = (arr) => reverser ? _.reverse(arr) : arr;
  const visibleCards = _.flow(_.sortBy, mapByMultiverseid, reverseIfNeeded);
  if(_.isEmpty(set))return {};
  let cardsFiltred = set.cards;
  const FiltersNames = _.keys(visibilityFilter);
  _.forEach(FiltersNames, filterName => {
    const filterCriteria = visibilityFilter[filterName] || [];
    switch(filterName) {
      case 'colors' : cardsFiltred = filterByColor(cardsFiltred, filterCriteria); break;
      case 'own' :  if(authenticated) {cardsFiltred = filterByOwn(cardsFiltred, filterCriteria, cards.owned.multiverseids[set.code] )}; break;
      case 'search' : cardsFiltred = filterBySearch(cardsFiltred, filterCriteria) ;break;
    }
  });

  if (sorter === "rarity") { sorter = (a) => {
    const ranked = {
      "Common": 4,
      "Rare": 2,
      "Uncommon":3,
      "Mythic Rare": 1
    }; return ranked[a.rarity] }}
  if (sorter === "power") { sorter = (card) => {
    if (_.includes(card.types, 'Creature')) { return card.power }
    if (_.includes(card.types, 'Planeswalker')) { return card.loyalty }
    return -1;
  }}
  return {[set.code]:{...set, cards:_.keyBy(cardsFiltred, "multiverseid"), visibleCards: visibleCards(cardsFiltred, sorter)}}

};
const filterByCardsOwned = (cards) => {
  return _.filter(cards, val => val.cards.length)
};

const mapMultiverseid = (cards) => {
  return _.map(cards, item => item.code)
};
export const filterSets = ({ sets, visibilityFilter, cards, sorter, reverser }) => {
  if(_.isEmpty(sets) || _.isArray(sets)) return {};
  const reverseIfNeeded  = (arr) => reverser ? _.reverse(arr) : arr;
  const visibleCards = _.flow(_.sortBy, mapByMultiverseid, reverseIfNeeded);
  let final = sets;
  const test = _.flow(filterByCardsOwned, mapMultiverseid)(sets);
  _.forEach(test, code => {
    let newSet = sets[code]
    let cardsFiltred = _.keyBy(sets[code].cards, "multiverseid");
    const FiltersNames = _.keys(visibilityFilter);
    _.forEach(FiltersNames, filterName => {
      const filterCriteria = visibilityFilter[filterName] || [];
      switch(filterName) {
        case 'colors' : cardsFiltred = filterByColor(cardsFiltred, filterCriteria); break;
        case 'own' :  cardsFiltred = filterByOwn(cardsFiltred,filterCriteria, cards.owned.multiverseids[code] );break;
        case 'search' : cardsFiltred = filterBySearch(cardsFiltred, filterCriteria) ;break;
      }
    });
    newSet =  {...newSet, cards:_.keyBy(cardsFiltred, "multiverseid"), visibleCards: visibleCards(cardsFiltred, sorter)};
    final = {...final, [code]:newSet}
  });

  return final

};
