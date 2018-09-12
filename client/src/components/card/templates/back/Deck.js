import React, { Component } from 'react';
import _ from 'lodash';
import { Button } from "reactstrap";
import { IconWishList } from "../../icons/icons";
import CardDetails from "../../CardDetails";

const addNewCard = (set, card, insertCardFromDeck) => {
  insertCardFromDeck(set.deck, {...card, code:set.code});
};

export const deckTemplate = ({set, card, insertCardFromDeck }, numberOfCardOwned) => {
  const top = () => <div><IconWishList/></div>;
  const middle = () => [<CardDetails key="1" buttonLabel="Details" set={set} card={card}/>, <Button key="2" onClick ={()=>addNewCard(set, card,insertCardFromDeck)}>+</Button>];
  const bottom= () => <div className="copiesNumber"><span>{numberOfCardOwned}</span></div>;
  return { top, middle, bottom }
};

