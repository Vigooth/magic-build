import React from 'react';
import _ from 'lodash';
import CardDetails from "./CardDetails";
import { IconMinus, IconPlus, IconWishList } from "./icons/icons";

export const CardBack = ({ updateMyCards, set, cardOwned, card }) => {
  return (<div className="back">
    <div className="top">
      <div>
        <IconWishList/>
      </div>
    </div>
    <div className="middle">
      <CardDetails buttonLabel="Details" set={set} card={card}/>
    </div>
    <div className="bottom">
      <div className="copiesNumber">
        <span className="minus" onClick={() => updateMyCards("DEC", card.multiverseid, set.code, cardOwned.number)}><IconMinus size="25px"
                                                                                              color="#e0c6d0"/></span>
        <span>{cardOwned.number || 0}</span>
        <span className="plus" onClick={() => updateMyCards("INC", card.multiverseid, set.code, cardOwned.number)}><IconPlus size="25px"
                                                                                            color="#e0c6d0"/></span>
      </div>
    </div>
  </div>)
};
