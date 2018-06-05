import React from 'react';
import axios from 'axios';

const colorsIdentity = ["B", "U", "R", "W", "G"];

const symbolColor = (colorIdentity, size) => `http://gatherer.wizards.com/handlers/Image.ashx?size=${size}&name=${colorIdentity}&type=symbol`;

const cardScyfallImage = (number, edition, language, size) => `https://img.scryfall.com/cards/${size}/${language}/${_.toLower(edition)}/${number}.jpg`;

const getAllSets =  () => {
  return  axios.get(`https://mtgjson.com/json/AllSets.json`)
};
const getSetFromEdition =  edition => {
  return  axios.get(`https://mtgjson.com/json/${edition}-x.json`)
};

export { colorsIdentity, symbolColor, getSetFromEdition, getAllSets, cardScyfallImage }
