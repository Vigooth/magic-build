import React from 'react';
import { Button } from "reactstrap";

export const ButtonAddItem = ({ numberVisibleItem, MAX_ITEM, onClick }) => {
  return (numberVisibleItem < MAX_ITEM) ?
    <Button
      className="loadMore"
      onClick={onClick}>Load more
    </Button>
    : null
};
