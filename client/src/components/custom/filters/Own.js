import React from 'react';
import {Input} from "reactstrap";

const FilterOwn = (props) => <Input className="select-filterMyCards"  type="select" onChange = {props.onOwnChange}>
  <option  value="all">All cards</option>
  <option  value="missing">Missing cards</option>
  <option value="own">Card owned</option>
</Input>;

const filterByOwn = (cards, name, owned) => {
  if(name==="own"){return _.filter( cards, card => _.indexOf( owned.multiverseids, card.multiverseid)!==-1 )}
  if(name==="missing"){return _.filter( cards, card => _.indexOf( owned.multiverseids, card.multiverseid)===-1 )}
  return cards
};
  export { FilterOwn, filterByOwn }
