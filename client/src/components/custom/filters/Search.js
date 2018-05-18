import React from 'react';
import {Button, ButtonGroup, Input} from 'reactstrap';
import {colorsIdentity, symbolColor} from "../../constantes";

const FilterSearch = (props) => <Input className="searchCardBar" placeholder={"Search a card"} onChange = {props.onSearchChange} />
const filterBySearch = (cards, name) => _.filter( cards, card => _.includes(card.name, name) );

export { FilterSearch, filterBySearch }
