import React from 'react';
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";

const CardActions = (props) =>
  <div className="cardActions">
    <CardFront {...props} />
    <CardBack {...props}/>
  </div>;
export { CardActions }
