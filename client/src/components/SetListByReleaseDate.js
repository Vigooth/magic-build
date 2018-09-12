import React from 'react';
import _ from 'lodash';
import { Link, Redirect } from "react-router-dom";
import SetItem from "./routes/set";
const SetsByReleaseDateList = (sets, history) => {
  const
    setsOrdered = _.orderBy(sets, 'releaseDate', 'desc'),
    setsSortedByDate = _.groupBy(setsOrdered, (set) => _.split(set.releaseDate, '-', 1)),
    listReleaseDateDesc = _.reverse(_.keys(setsSortedByDate));

  return _.map(listReleaseDateDesc, releaseDate =>
    <SetsByReleaseDateItem
      key={releaseDate}
      releaseDate={releaseDate}
      setsSortedByDate={setsSortedByDate}
      history={history}
    />
  )
};
const SetsByReleaseDateItem = ({ releaseDate, setsSortedByDate, history }) =>
  <div className="setByYear" key={releaseDate}>
    <h1>{releaseDate}</h1>
    <SetList sets={setsSortedByDate[releaseDate]} history={history} />
  </div>;

const SetList = ({ sets, history }) => _.map(sets, set => <SetItem key={set.code} {...set} history={history}/>);

export { SetsByReleaseDateList }
