import React from 'react';
import { Filters } from "../Filters";
import Sorter from "./sorter/Sorter";
import Reverser from "./reverser/Reverser";

export const SetControls = ({ visibilityFilter }) =>
  <div>
    <Filters  {...visibilityFilter}/>
    <div className="filter-order">
      <Sorter />
      <Reverser />
    </div>
    <div className="filterScroll"/>
  </div>;
