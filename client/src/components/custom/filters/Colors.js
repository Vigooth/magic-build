import React from 'react';
import { Button } from 'reactstrap';
import { colorsIdentity, symbolColor } from "../../constantes";

const colors = _.map(colorsIdentity, colorIdentity => ({label: <img src={symbolColor(colorIdentity, 'medium')} />, value: colorIdentity}));

 const FilterColorsBtn = (props) => _.map(colors, color => {
  const isActive = props.active.includes(color.value) ? 'active' : '';
  return <Button  className={`btn-filterColor ${isActive}`} color="none" key={color.value} onClick={() => props.onColorClick(color.value)} >{color.label}</Button>
});

const filterByColor = (cards, names) => _.filter( cards, card => _.intersection(card.colorIdentity,names).length === names.length );

export  { FilterColorsBtn, filterByColor }
