import React from 'react';
import { Input } from 'reactstrap';

const FilterSearchBtn = (props) => <Input className="searchCardBar" placeholder={"Search a card"} onChange = {props.onSearchChange} />;

const filterBySearch = (cards, name) => _.filter( cards, card => _.includes(card.name, name) );

export { FilterSearchBtn, filterBySearch }
