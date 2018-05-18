import React from 'react';
import axios from 'axios';

const colorsIdentity = ["B", "U", "R", "W", "G"];

const symbolColor = (colorIdentity, size) => `http://gatherer.wizards.com/handlers/Image.ashx?size=${size}&name=${colorIdentity}&type=symbol`;
const cardImage = (multiverseid) => `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${multiverseid}&type=card`;

const getSetFromEdition =  edition => {
  return  axios.get(`https://mtgjson.com/json/${edition}-x.json`)
};

export { colorsIdentity, symbolColor, cardImage, getSetFromEdition  }
