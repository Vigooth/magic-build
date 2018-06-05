import React from 'react';
import { Input } from 'reactstrap';

const FilterSearchBtn = ({ defaultValue, setVisibilityFilter }) => <Input className="searchCardBar" defaultValue={defaultValue} placeholder={"Search a card"} onChange ={(e) => {setVisibilityFilter({'own':e.target.value})}} />;

const filterBySearch = (cards, name) => _.filter( cards, card => _.includes(card.name, name) );

export { FilterSearchBtn, filterBySearch }
