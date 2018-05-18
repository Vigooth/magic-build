import React, { Component } from 'react';
import {Button, ButtonGroup, Input} from 'reactstrap';
import _ from 'lodash';
import { symbolColor, colorsIdentity } from "../../constantes";

const filterSet = ({ set, visibilityFilter, cards }) => {
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
  return {...set, cards:_.keyBy(cardsFiltred, "multiverseid")}

};

export {  filterSet  }
