import { FETCH_SET } from './types';
import { getSetFromEdition } from "../components/constantes";
import { filterByColor, filterBySearch, filterByOwn } from "../components/custom/filters/test";
import _  from 'lodash';

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
  console.log(sorter)
  return(dispatch) => {
    console.log(dispatch)
    dispatch({
      type: 'SET_SORTER',
      sorter
    })
  }
}

export const setVisibilityFilter = (filter) =>  {
  return (dispatch, getState) => {
    const { visibilityFilter } = getState();

    dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: { ...visibilityFilter, ...filter,}
    })
  }
};

export const filterSet = ({ set, visibilityFilter, cards, sorter }) => {
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
  let a= {};
  console.log(_.forEach(_.sortBy(cardsFiltred, sorter), card => (a= {...a, [card.multiverseid]: card}) ))
  console.log(a)
  return {...set, cards:_.keyBy(_.sortBy(cardsFiltred, "artist"), "multiverseid")}

};
