import React from 'react';
import { Spinner } from "./icons/spinner";

export const CardFront = ({cardOwned, loading, card}) => {

  const numberOfCardOwned = card.multiverseid === loading ? <Spinner size={32}/> : (cardOwned.number || null);

  return (
    <div className="front">
      <div className="top"/>
      <div className="middle">
      </div>
      <div className="bottom">
        <div className="copiesNumber"><span>{numberOfCardOwned}</span></div>
      </div>
    </div>
  )
};
