import React from 'react';
import  { Input } from "reactstrap";

const FilterOwnBtn = ({ onOwnChange, defaultValue, setVisibilityFilter }) =>  (
  <Input className="select-filterMyCards"  type="select" onChange = {(e) => {setVisibilityFilter({'own':e.target.value})}} defaultValue={defaultValue}>
    <option value="all">All cards</option>
    <option value="missing">Missing cards</option>
    <option value="own">Card owned</option>
  </Input>
);

const filterByOwn = (cards, name, multiverseids) => {
  if (name==="own")     { return _.filter( cards, card => _.indexOf( multiverseids, card.multiverseid)!==-1 )}
  if (name==="missing") { return _.filter( cards, card => _.indexOf( multiverseids, card.multiverseid)===-1 )}
  return cards
};

export { FilterOwnBtn, filterByOwn }
