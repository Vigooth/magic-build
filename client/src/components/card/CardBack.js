import React from 'react';
import _ from 'lodash';
import CardDetails from "./CardDetails";
import { IconMinus, IconPlus } from "./icons/icons";

const findCardInSet = ( cards, multiverseid ) => {
  return _.find(cards, { multiverseid })
};

export const CardBack = ({ updateMyCards, set, multiverseid, cardOwned }) =>
  <div className="back">
    <div className="top" />
    <div className="middle">
      <CardDetails buttonLabel="Details" set={ _.omit(set, 'cards') } card={ findCardInSet(set.cards, multiverseid) }/>
    </div>
    <div className="bottom">
      <div className="copiesNumber">
        <span className="minus" onClick={() => updateMyCards("DEC", multiverseid)}><IconMinus size="25px" color="#e0c6d0" /></span>
        <span >{cardOwned.number || 0}</span>
        <span className="plus" onClick={() => updateMyCards("INC", multiverseid)}><IconPlus size="25px" color="#e0c6d0"/></span>
      </div>
    </div>
  </div>;
