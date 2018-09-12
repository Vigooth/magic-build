import React from 'react';
import axios from 'axios';
import { eleven, five, four, nine, one, seven, six, ten, three, twelve, two, zero, eight, w, r, g, b, u, x, c } from "./symbols";

const colorsIdentity = ["B", "U", "R", "W", "G"];
const types = ['Creature','Artifact,Creature', 'Planeswalker', 'Enchantment','Instant','Sorcery', 'Artifact' ,'Land'];
const symbolColor2 = (colorIdentity, size) => `http://gatherer.wizards.com/handlers/Image.ashx?size=${size}&name=${colorIdentity}&type=symbol`;
const symbolColor = (colorIdentity, size) => {
  switch (colorIdentity) {
    case "W" : return w(size);
    case "B" : return b(size);
    case "U" : return u(size);
    case "R" : return r(size);
    case "G" : return g(size);
    case "0" : return zero(size);
    case "1" : return one(size);
    case "2" : return two(size);
    case "3" : return three(size);
    case "4" : return four(size);
    case "5" : return five(size);
    case "6" : return six(size);
    case "7" : return seven(size);
    case "8" : return eight(size);
    case "9" : return nine(size);
    case "10" : return ten(size);
    case "11" : return eleven(size);
    case "12" : return twelve(size);
    case "X" : return x(size);
    case "C" : return c(size);
    default : break;
  }
};
const convertSymbolColorToRGBA = (colorIdentity, opacity = 1) => {
  switch (colorIdentity) {
    case "W" : return `rgb(255, 251, 213, ${opacity})`;
    case "B" : return `rgb(203, 194, 191, ${opacity})`;
    case "U" : return `rgb(170, 224, 250, ${opacity})`;
    case "R" : return `rgb(249, 170, 143, ${opacity})`;
    case "G" : return `rgb(155, 211, 174, ${opacity})`;
  }
};
const cardScyfallImage = (number, edition, language, size) => `https://img.scryfall.com/cards/${size}/${language}/${_.toLower(edition)}/${number}.jpg`;

const getAllSets =  () => {
  return  axios.get(`https://mtgjson.com/json/AllSets.json`)
};
const getSetFromEdition =  edition => {
  return  axios.get(`https://mtgjson.com/json/${edition}-x.json`)
};
const searchCard = (name) => {
 return  axios.get(`https://api.scryfall.com/cards/search?q=${name}`)}
 ;
export { colorsIdentity, types, symbolColor, symbolColor2, getSetFromEdition, getAllSets, cardScyfallImage, convertSymbolColorToRGBA, searchCard }
