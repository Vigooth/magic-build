import React from 'react';
import Filter from "../containers/Filter";

const Filters = ({ colors = [], search = "", own = "" }) => {
  const filters = [{ colors }, { search }, { own }];
  return (
    <div className="filtersGroup">
      {_.map(filters, (filter, index) => <Filter key={index} type={getKey(filter)} defaultValue={filter[getKey(filter)]} />)}
    </div>
  )
};

const getKey = (obj) => _.keys(obj)[0];

export { Filters }
