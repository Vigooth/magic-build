import React from 'react';

export const CardFront = ({ cardOwned }) => <div className="front">
  <div className="top" />
  <div className="middle">
  </div>
  <div className="bottom">
    <div className="copiesNumber"><span >{cardOwned.number || null}</span></div>
  </div>
</div>;
