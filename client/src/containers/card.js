import React from 'react';
import CardDetails from "./cardDetails";
import { IconPlus, IconMinus } from "../components/custom/icons/icons";
import { cardImage } from "../components/constantes";

const onMinusClick = ({ decCard, updateMyCards, multiverseid }) => {
  decCard(multiverseid);
  updateMyCards("DEC", multiverseid)
};
const onPlusClick = ({ addCard, updateMyCards, multiverseid }) => {
  addCard(multiverseid);
  updateMyCards("INC", multiverseid)
};

const findCardInSet = ( cards, multiverseid ) => {
  return _.find(cards, { multiverseid })
};

const Card = ({ props,  multiverseid }) => {
  const
    { cards : { owned } } = props,
    cardOwned = owned.byMultiverseid[multiverseid] || {},
    addCssIfCardIsOwned =cardOwned.number ? 'owned' : '';
  return (
    <div className="cardBox" style={{'padding': '2px'}}>
      <img  className={`image placeholder ${addCssIfCardIsOwned}`}   src={cardImage(multiverseid)} />
      <span className={"aaa"} ><h3>{cardOwned.number || null}</h3></span>
      <div className="cardActions">
        <div className="top" />
        <div className="middle">
          <CardDetails buttonLabel="Details" set={ _.omit(props.set, 'cards') } card={ findCardInSet(props.set.cards, multiverseid) }/>
        </div>
        <div className="bottom">
          <div className="copiesNumber">
            <span className="minus" onClick={() => onMinusClick({ ...props, multiverseid })}><IconMinus size="25px" color="#e0c6d0" /></span>
            <span><h3>{cardOwned.number || 0}</h3></span>
            <span className="plus" onClick={() => onPlusClick({ ...props, multiverseid })}><IconPlus size="25px" color="#e0c6d0"/></span>
          </div>
        </div>

      </div>

    </div>
  )
};

export { Card }
