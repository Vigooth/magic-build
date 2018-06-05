import React from 'react';
import _ from 'lodash';
import { Link } from "react-router-dom";

const SetsByReleaseDateList = (sets) => {
  const
    test = _.orderBy(sets, 'releaseDate', 'desc'),
    setsSortedByDate = _.groupBy(test, (set) => _.split(set.releaseDate, '-', 1)),
    listReleaseDateDesc = _.reverse(_.keys(setsSortedByDate));

  return _.map(listReleaseDateDesc, releaseDate =>
    <SetsByReleaseDateItem
      key={releaseDate}
      releaseDate={releaseDate}
      setsSortedByDate={setsSortedByDate} />
  )
};
const SetsByReleaseDateItem = ({ releaseDate, setsSortedByDate }) =>
  <div className="setByYear" key={releaseDate}>
    <h1>{releaseDate}</h1>
    <SetList sets={setsSortedByDate[releaseDate]} />
  </div>;

const SetList = ({ sets }) => _.map(sets, set => <SetItem key={set.code} {...set}/>);

const SetItem = ({ code, name, cardsNumber }) =>
  <span className="edition" key={code}>
      <Link to={`/set/${code}`}>
        {name} <p style={{fontSize:'22px'}}>({cardsNumber})</p>
      </Link>
    </span>;



export { SetsByReleaseDateList }
