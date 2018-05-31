import React from 'react';
import _ from 'lodash';
import { Link } from "react-router-dom";

const setItem = set =>
  <span className="edition" key={set.code}>
      <Link to={`/set/${set.code}`}>
        {set.name} <p style={{fontSize:'22px'}}>({set.cardsNumber})</p>
      </Link>
    </span>;

const setList = (sets) => _.map(sets, set => setItem(set));

const  RenderSetsByReleaseDate = (sets) => {
  const
    test = _.orderBy(sets, 'releaseDate', 'desc'),
    setsSortedByDate = _.groupBy(test, (set) => _.split(set.releaseDate, '-', 1)),
    listReleaseDateDesc = _.reverse(_.keys(setsSortedByDate));

  return _.map(listReleaseDateDesc, releaseDate =>
    <div className="setByYear" key={releaseDate}>
      <h1>{releaseDate}</h1>
      {setList(setsSortedByDate[releaseDate])}
    </div>
  )
};
export { RenderSetsByReleaseDate }
