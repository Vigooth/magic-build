import React from 'react';
import Filter from "../components/custom/filters/Filter";

const Filters = (props) => {
  return <div className="filtersGroup">
    <Filter type="colors" defaultValue={props.colors} />
    <Filter type="search" />
    <Filter type="own" />
  </div>
}
export {Filters}