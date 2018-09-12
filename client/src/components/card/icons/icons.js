import React from 'react';

const IconPlus = (props) =>{
  const { size = "25px", color } = props;
  return   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 25 25`}>
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill={color || 'black'}/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>;
};

const IconDetails = (props) =>{
  const { size = "25px", color } = props;
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="Calque_1"
    onClick={props.onClick}
    style={props.style}
    viewBox="0 0 72 43"
    width={props.width || "72"}
    height={props.height || "43"}
  >
    <g
      id="layer1"
      style={{"display":"inline"}}
      transform="translate(-0.29550826,-0.105406)"><g
      id="g51"
      transform="translate(-11.10238,-22.894594)"><path
      d="M 80.2,44.3 C 74.8,52.4 65.5,63.1 47.3,63.1 29.1,63.1 20.5,53.5 14.4,44.3 20.8,34.7 29.1,25.5 47.3,25.5 65.5,25.5 75,36.4 80.2,44.3 Z"
      id="path37"
      style={{"fill":"white","stroke":"#000000","strokeWidth":"5","strokeMiterlimit":"10"}} /><circle
      cx="47.299999"
      cy="44.299999"
      r="12.3"
      id="circle49"
      style={{"fill":"#e3a8a8","stroke":"#000000","strokeWidth":"5","strokeMiterlimit":"10"}} />
    </g></g>
  </svg>
};

const IconMinus = (props) => {
  const { size = "25px" } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 25 25`}>
    <path d="M19 13H5v-2h14v2z" fill={props.color || 'black'}/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>};

const IconUser = (props) => <svg xmlns="http://www.w3.org/2000/svg" width={props.size}  height={props.size} viewBox="0 0 64 64" ><g id="Layer_1"><g><circle cx="32" cy="32" fill="#4F5D73" r="32"/></g><g opacity="0.2"><g><path d="M43.905,47.543c-3.821-1.66-5.217-4.242-5.643-6.469c2.752-2.215,4.943-5.756,6.148-9.573     c1.239-1.579,1.96-3.226,1.96-4.62c0-0.955-0.347-1.646-0.955-2.158c-0.203-8.106-5.942-14.613-13.039-14.714     C32.322,10.009,32.268,10,32.213,10c-0.022,0-0.043,0.004-0.065,0.004c-7.052,0.039-12.783,6.41-13.125,14.409     c-0.884,0.528-1.394,1.305-1.394,2.469c0,1.641,0.992,3.63,2.663,5.448c1.187,3.327,3.118,6.38,5.5,8.438     c-0.354,2.292-1.699,5.039-5.697,6.776c-2.159,0.938-6.105,1.781-7.808,2.649c4.362,4.769,12.624,7.769,19.589,7.805l0.099,0.003     C31.983,57.999,31.992,58,32,58c7.014,0,15.325-3.01,19.713-7.808C50.01,49.324,46.063,48.481,43.905,47.543z" fill="#231F20"/></g></g><g><g><path d="M43.905,45.543c-3.821-1.66-5.217-4.242-5.643-6.469c2.752-2.215,4.943-5.756,6.148-9.573     c1.239-1.579,1.96-3.226,1.96-4.62c0-0.955-0.347-1.646-0.955-2.158C45.213,14.618,39.474,8.11,32.378,8.01     C32.322,8.009,32.268,8,32.213,8c-0.022,0-0.043,0.004-0.065,0.004c-7.052,0.039-12.783,6.41-13.125,14.409     c-0.884,0.528-1.394,1.305-1.394,2.469c0,1.641,0.992,3.63,2.663,5.448c1.187,3.327,3.118,6.38,5.5,8.438     c-0.354,2.292-1.699,5.039-5.697,6.776c-2.159,0.938-6.105,1.781-7.808,2.649c4.362,4.769,12.624,7.769,19.589,7.805l0.099,0.003     C31.983,55.999,31.992,56,32,56c7.014,0,15.325-3.01,19.713-7.808C50.01,47.324,46.063,46.481,43.905,45.543z" fill="#FFFFFF"/></g></g></g><g id="Layer_2"/></svg>;
/*const Logo = (props) => <svg width={props.size}  height={props.size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
  <path d="m586.2 342.4c-39.4-22.2-64.6-33.3-75.7-33.3-8.1 0-14.4 6.2-18.9 18.6-4.5 12.4-13.6 18.5-27.2 18.5-5.6 0-16.9-2-34.1-6-9.6 14.6-14.4 24-14.4 28 0 5.6 4.1 12.1 12.4 19.7 8.3 7.6 15.2 11.3 20.9 11.3 3.6 0 8.5-0.7 14.7-2.3 6.2-1.5 10.3-2.3 12.4-2.3 6.2 0 9.3 11.4 9.3 34.1 0 21.7-5 55-15.1 99.9-13.1-51.5-27-77.2-41.6-77.2-2 0-6.2 1.5-12.5 4.6-6.3 3-11 4.5-14 4.5-14.6 0-27.7-13.4-39.4-40.1-23.2 3.5-34.8 15.4-34.8 35.6 0 10.1 4.7 18.2 14 24.2 9.3 6.1 14 10.4 14 12.9 0 13.6-19.9 34.6-59.8 62.8-21.2 15.1-35.8 25.7-43.9 31.8 7-9.1 14.1-20.9 21.2-35.6 8.1-16.6 12.1-29.5 12.1-38.6 0-5-5.8-12.1-17.4-21.2-11.6-9.1-17.4-18.7-17.4-28.8 0-8.6 3-19.2 9.1-31.8-6.6-7.6-14.4-11.4-23.5-11.4-20.2 0-30.3 6.6-30.3 19.7 0-9.1 0-2.3 0 20.4 0.5 16.7-12.1 25-37.9 25-19.7 0-52.7-4.6-99.2-13.6 52.5-13.1 78.7-28.3 78.7-45.4 0 2-1-4-3-18.2-2-15.6 9.1-29.8 33.3-42.4-4.5-23.2-16.6-34.8-36.3-34.8-3 0-8.6 5.3-16.6 15.9-8.1 10.6-15.6 15.9-22.7 15.9-12.1 0-27.8-13.1-46.9-39.4-9.1-13.1-23-32.5-41.6-58.3 11.6 6.1 23.2 12.1 34.8 18.2 15.1 7.1 27.3 10.6 36.3 10.6 7.1 0 14-6.2 20.8-18.6 6.8-12.4 15.8-18.6 26.9-18.6 1.5 0 11.6 3 30.3 9.1 9.6-14.6 14.4-25.5 14.4-32.6 0-6.1-3.7-13-11-20.8-7.3-7.8-14-11.7-20.1-11.7-2.5 0-6.4 0.8-11.7 2.3-5.3 1.5-9.2 2.3-11.7 2.3-9.1 0-13.6-11.4-13.6-34.1 0-6.1 5.8-40.6 17.4-103.7-0.5 7.6 2.8 21.7 9.8 42.4 8.6 25.2 18.7 37.9 30.3 37.9 2 0 6.1-1.5 12.1-4.5 6.1-3 10.8-4.5 14.4-4.5 11.6 0 21.2 6.6 28.8 19.7l11.4 20.4c10.6 0 19.4-3.8 26.5-11.3 7.1-7.6 10.6-16.7 10.6-27.3 0-11.1-4.7-19.6-14-25.4-9.4-5.8-14-10.2-14-13.2 0-10.6 16.7-28.5 50-53.7 26.7-20.2 44.2-32 52.2-35.6-21.7 29.3-32.6 50.7-32.6 64.3 0 7.1 4.3 14.6 12.9 22.7 10.6 9.6 16.7 16.4 18.2 20.4 5 11.6 4.5 27.5-1.5 47.7 13.6 9.6 24 14.4 31 14.4 14.6 0 21.9-7.6 21.9-22.7 0-1.5-0.6-6.3-1.9-14.4-1.3-8.1-1.6-12.6-1.1-13.6 2-7.1 15.9-10.6 41.6-10.6 16.2 0 49.7 4.5 100.7 13.6-11.1 3-27.8 7.6-50 13.6-20.2 6.1-30.3 12.9-30.3 20.4 0 3.5 1.3 9.6 3.8 18.2 2.5 8.6 3.8 14.9 3.8 18.9 0 7.1-4.5 13.6-13.6 19.7l-25.7 18.2c6.1 11.1 10.1 17.7 12.1 19.7 5 6.1 11.9 9.1 20.4 9.1 6.1 0 11.6-5.3 16.7-15.9 5-10.6 13.1-15.9 24.2-15.9 13.6 0 29 12.6 46.2 37.9 9.6 14.2 24.5 35.6 44.6 64.4m-168-43.9c0-32.3-11.9-60.3-35.6-84-23.7-23.7-51.7-35.6-84-35.6-32.8 0-61.1 11.7-84.8 35.2-23.7 23.5-35.8 51.6-36.3 84.4-0.5 32.3 11.5 60.2 36 83.6 24.5 23.5 52.9 35.2 85.2 35.2 34.3 0 63-11.2 85.9-33.7 23-22.4 34.2-50.8 33.7-85.1m-11.4 0c0 30.8-10.3 56.3-31 76.4-20.7 20.2-46.4 30.3-77.2 30.3-29.8 0-55.3-10.3-76.4-31-21.2-20.7-31.8-45.9-31.8-75.7 0-29.3 10.7-54.4 32.2-75.3 21.5-20.9 46.8-31.4 76.1-31.4 29.3 0 54.6 10.6 76.1 31.8 21.4 21.2 32.2 46.2 32.2 74.9" fill="#FD9D1A" stroke="black" strokeWidth="7" />
  <path d="m546.93 375.53c-28.722 29.23-64.1 43.842-106.13 43.842-47.17 0-84.59-16.14-112.27-48.44-26.15-30.762-39.22-69.972-39.22-117.64 0-51.26 22.302-109.72 66.9-175.34 36.38-53.814 79.19-100.98 128.41-141.48-7.182 32.814-10.758 56.13-10.758 69.972 0 31.794 9.984 62.802 29.976 93.05 24.612 35.88 43.31 62.56 56.14 79.968 19.992 30.26 29.988 59.73 29.988 88.42.001 42.558-14.346 78.44-43.04 107.65m-.0-0." fill="#aae0fa" stroke="black" strokeWidth="5"  transform=" scale(0.83) translate(-82.51 100.79)"/>
</svg>*/
const Logo = (props) => <svg width={props.size}  height={props.size} viewBox={`0 0 600 600`} id="logo" onClick={props.onLogoClick} xmlns="http://www.w3.org/2000/svg">
  <g>
    <title>Logo</title>
    <path id="sun" strokeWidth="7" stroke="black" fill={props.fillSun ||"#FD9D1A"} d="m586.2,342.4c-39.4,-22.2 -64.6,-33.3 -75.7,-33.3c-8.1,0 -14.4,6.2 -18.9,18.6c-4.5,12.4 -13.6,18.5 -27.2,18.5c-5.6,0 -16.9,-2 -34.1,-6c-9.6,14.6 -14.4,24 -14.4,28c0,5.6 4.1,12.1 12.4,19.7c8.3,7.6 15.2,11.3 20.9,11.3c3.6,0 8.5,-0.7 14.7,-2.3c6.2,-1.5 10.3,-2.3 12.4,-2.3c6.2,0 9.3,11.4 9.3,34.1c0,21.7 -5,55 -15.1,99.9c-13.1,-51.5 -27,-77.2 -41.6,-77.2c-2,0 -6.2,1.5 -12.5,4.6c-6.3,3 -11,4.5 -14,4.5c-14.6,0 -27.7,-13.4 -39.4,-40.1c-23.2,3.5 -34.8,15.4 -34.8,35.6c0,10.1 4.7,18.2 14,24.2c9.3,6.1 14,10.4 14,12.9c0,13.6 -19.9,34.6 -59.8,62.8c-21.2,15.1 -35.8,25.7 -43.9,31.8c7,-9.1 14.1,-20.9 21.2,-35.6c8.1,-16.6 12.1,-29.5 12.1,-38.6c0,-5 -5.8,-12.1 -17.4,-21.2c-11.6,-9.1 -17.4,-18.7 -17.4,-28.8c0,-8.6 3,-19.2 9.1,-31.8c-6.6,-7.6 -14.4,-11.4 -23.5,-11.4c-20.2,0 -30.3,6.6 -30.3,19.7c0,-9.1 0,-2.3 0,20.4c0.5,16.7 -12.1,25 -37.9,25c-19.7,0 -52.7,-4.6 -99.2,-13.6c52.5,-13.1 78.7,-28.3 78.7,-45.4c0,2 -1,-4 -3,-18.2c-2,-15.6 9.1,-29.8 33.3,-42.4c-4.5,-23.2 -16.6,-34.8 -36.3,-34.8c-3,0 -8.6,5.3 -16.6,15.9c-8.1,10.6 -15.6,15.9 -22.7,15.9c-12.1,0 -27.8,-13.1 -46.9,-39.4c-9.1,-13.1 -23,-32.5 -41.6,-58.3c11.6,6.1 23.2,12.1 34.8,18.2c15.1,7.1 27.3,10.6 36.3,10.6c7.1,0 14,-6.2 20.8,-18.6c6.8,-12.4 15.8,-18.6 26.9,-18.6c1.5,0 11.6,3 30.3,9.1c9.6,-14.6 14.4,-25.5 14.4,-32.6c0,-6.1 -3.7,-13 -11,-20.8c-7.3,-7.8 -14,-11.7 -20.1,-11.7c-2.5,0 -6.4,0.8 -11.7,2.3c-5.3,1.5 -9.2,2.3 -11.7,2.3c-9.1,0 -13.6,-11.4 -13.6,-34.1c0,-6.1 5.8,-40.6 17.4,-103.7c-0.5,7.6 2.8,21.7 9.8,42.4c8.6,25.2 18.7,37.9 30.3,37.9c2,0 6.1,-1.5 12.1,-4.5c6.1,-3 10.8,-4.5 14.4,-4.5c11.6,0 21.2,6.6 28.8,19.7l11.4,20.4c10.6,0 19.4,-3.8 26.5,-11.3c7.1,-7.6 10.6,-16.7 10.6,-27.3c0,-11.1 40.4,-43.6 20,-5.4c-20.4,38.2 25,18.8 -7,-10.2c0,-10.6 -20.3,-5.5 13,-30.7c26.7,-20.2 -17.8,62 19.2,-22.6c-21.7,29.3 -3.6,-8.3 -3.6,5.3c0,7.1 -13.7,5.1 -18.1,18.7c-4.4,13.6 36.7,33.4 1.2,43.4c-35.5,10 52.5,8.5 46.5,28.7c13.6,9.6 24,14.4 31,14.4c14.6,0 21.9,-7.6 21.9,-22.7c0,-1.5 -0.6,-6.3 -1.9,-14.4c-1.3,-8.1 -1.6,-12.6 -1.1,-13.6c2,-7.1 15.9,-10.6 41.6,-10.6c16.2,0 49.7,4.5 100.7,13.6c-11.1,3 -27.8,7.6 -50,13.6c-20.2,6.1 -30.3,12.9 -30.3,20.4c0,3.5 1.3,9.6 3.8,18.2c2.5,8.6 3.8,14.9 3.8,18.9c0,7.1 -4.5,13.6 -13.6,19.7l-25.7,18.2c6.1,11.1 10.1,17.7 12.1,19.7c5,6.1 11.9,9.1 20.4,9.1c6.1,0 11.6,-5.3 16.7,-15.9c5,-10.6 13.1,-15.9 24.2,-15.9c13.6,0 29,12.6 46.2,37.9c9.6,14.2 24.5,35.6 44.6,64.4m-168,-43.9c0,-32.3 -11.9,-60.3 -35.6,-84c-23.7,-23.7 -51.7,-35.6 -84,-35.6c-32.8,0 -61.1,11.7 -84.8,35.2c-23.7,23.5 -35.8,51.6 -36.3,84.4c-0.5,32.3 11.5,60.2 36,83.6c24.5,23.5 52.9,35.2 85.2,35.2c34.3,0 63,-11.2 85.9,-33.7c23,-22.4 34.2,-50.8 33.7,-85.1m-11.4,0c0,30.8 -10.3,56.3 -31,76.4c-20.7,20.2 -46.4,30.3 -77.2,30.3c-29.8,0 -55.3,-10.3 -76.4,-31c-21.2,-20.7 -31.8,-45.9 -31.8,-75.7c0,-29.3 10.7,-54.4 32.2,-75.3c21.5,-20.9 46.8,-31.4 76.1,-31.4c29.3,0 54.6,10.6 76.1,31.8c21.4,21.2 32.2,46.2 32.2,74.9"/>
    <path stroke="black" id="tear" strokeWidth="5" fill={props.fillTear ||"#aae0fa"} d="m373.371068,369.127139c-20.113546,21.839695 -44.888181,32.7573 -74.321103,32.7573c-33.03238,0 -59.236993,-12.059277 -78.620845,-36.192774c-18.312417,-22.984355 -27.465124,-52.280776 -27.465124,-87.896737c0,-38.299785 15.617726,-81.979174 46.848976,-131.008278c25.476319,-40.20805 55.455461,-75.448933 89.923422,-105.709201c-5.029437,24.517541 -7.533651,41.938489 -7.533651,52.280776c0,23.755431 6.991632,46.923588 20.991702,69.523898c17.235382,26.808356 30.329285,46.742773 39.313924,59.749458c14.00007,22.609276 21.000106,44.628291 21.000106,66.064515c0.0007,31.797937 -10.046269,58.607787 -30.140208,80.432538m7.533651,-89.053352"/>
  </g>
</svg>;

const IconMenu = ({size = '24px', onMenuClick}) => <svg version="1.2" id="iconMenu"  onClick={onMenuClick} baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path d="M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"/></svg>;

const IconWishList = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="wishList"  version="1.0" width="38.5" height="29.5" viewBox="0 0 134 118">
      <g>
        <title>Layer 1</title>
        <g id="heart"  fill="black" stroke="black" >
          <path id="path3659" fill="#d24242"  stroke="black" strokeWidth="3" d="M66.9874614091178,17.99694971452614 C156.82820487173205,-42.189505991694794 151.74288146078166,78.9420567116992 66.9874614091178,115.61027456730805 C-17.76795694726953,78.9420567116992 -22.853282150369367,-42.189505991694794 66.9874614091178,17.99694971452614 z"   />
        </g>
        <path id="circle" fill="white"  stroke="black"  strokeWidth="2" d="M29.961750843340074,53.66120852433412 C29.961750843340074,37.23153603161306 45.74456403059908,23.923501312509035 65.22951858277074,23.923501312509035 C84.71447313494237,23.923501312509035 100.49728632220139,37.23153603161306 100.49728632220139,53.66120852433412 C100.49728632220139,70.09088101705518 84.71447313494237,83.39891573615921 65.22951858277074,83.39891573615921 C45.74456403059908,83.39891573615921 29.961750843340074,70.09088101705518 29.961750843340074,53.66120852433412 z"  />
        <path fill="black"  stroke="black"  strokeWidth="6" d="M65.34810465804094,37.98892538248377 L65.34810465804094,68.04356846221842" id="svg_5"/>
        <path fill="none"  stroke="black"  strokeWidth="6" d="M65.38983727961725,35.017509290944346 L65.38983727961725,71.10580114574365 "  id="svg_2" transform="rotate(90.6838607788086 65.3898391723633,53.06165313720703) "/>
      </g>
    </svg>
  )
};
const IconCardByList = ({ size = "25px", style }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" style={style}>
      <path d="M80 280h256v48H80zM80 184h320v48H80zM80 88h352v48H80z"/><g>
      <path d="M80 376h288v48H80z"/></g>
    </svg>
  )
};
const IconCardByImage = ({ size = "24px", style }) => {
  return (
    <svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={style} viewBox="0 0 24 24">
      <circle cx="5" cy="19" r="2.5"/><circle cx="5" cy="12" r="2.5"/><circle cx="5" cy="5" r="2.5"/><circle cx="12" cy="19" r="2.5"/>
      <circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="5" r="2.5"/><circle cx="19" cy="19" r="2.5"/><circle cx="19" cy="12" r="2.5"/><circle cx="19" cy="5" r="2.5"/>
    </svg>
  )
};

const IconResizeSideMenu = ({size, rotate = 0}) => {
  return (
    <svg width={size} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
	 viewBox="0 90 212 310.1">
	<g transform={`rotate(${rotate}, 111, 245)`}>
		<path d="M203.8,229.9L33.3,94.8C19,84.4,0,91.7,0,111.4v269.2c0,20.1,21.3,24.6,33.3,15.6l170.5-135.1
			C214.1,252.5,216.2,239.3,203.8,229.9z M41.6,338V153L159,245.5L41.6,338z"/>
	</g>
</svg>
  )
}
export { IconPlus, IconMinus, IconUser, Logo, IconWishList, IconCardByList, IconCardByImage, IconMenu, IconResizeSideMenu, IconDetails}
