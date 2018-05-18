import React from 'react';

const IconPlus = (props) =>
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill={props.color || 'black'}/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>;

const IconMinus = (props) =>
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24">
    <path d="M19 13H5v-2h14v2z" fill={props.color || 'black'}/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
export { IconPlus, IconMinus}
