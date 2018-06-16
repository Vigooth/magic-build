import React from 'react';
import { Input } from 'reactstrap';
import { FlagFrance, FlagUnitedKingdom } from "../../flags";
import { reduceLogicalOperator } from "../../../utils";

const FilterSearchBtn = ({ defaultValue, setVisibilityFilter }) => (
  <div className="searchCardBarBox">
    <div className="flagsBox">
      <div className="flagsItems">
        <FlagFrance scale="0.2" />
        <FlagUnitedKingdom scale="0.2" />
      </div>
    </div>
    <Input className="searchCardBar" defaultValue={defaultValue} placeholder={"Search a card"} onChange ={(e) => {setVisibilityFilter({'search':e.target.value})}} />
  </div>);

const mapOfIsNameFoundInForeignNames = (languages, keyByForeignNames, name) => {
  return _.map( languages, language => {
    return (keyByForeignNames[language]) ? _.includes(keyByForeignNames[language].name, name): false;
  });
};

const isNameFoundInForgeignNames = (array = [], name, languages = ['French']) => {
  if (array.length === 0) return "";
  const keyByForeignNames = _.keyBy(array, 'language');
  return _.flow(mapOfIsNameFoundInForeignNames, reduceLogicalOperator("OR"))(languages, keyByForeignNames, name )
};

const filterBySearch = (cards, name) => {
  return _.filter( cards, card => _.includes(card.name, name) || isNameFoundInForgeignNames(card.foreignNames, name) )
};

export { FilterSearchBtn, filterBySearch }
