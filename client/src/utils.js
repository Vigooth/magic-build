const getPosition= (el) => {
  let [xPos,yPos] = [0,0];

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      let
        xScroll = el.scrollLeft || document.documentElement.scrollLeft,
        yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
};
const getPosition2= (el) => {
  let [xPos,yPos] = [0,0];

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      let
        xScroll = el.scrollLeft || document.documentElement.scrollLeft,
        yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
};
const reduceLogicalOperator = (operator) => {
  switch (operator) {
    case 'OR' :  return (array) =>_.reduce(array, (a, b)=> (a || b));
    case 'AND' : return (array) =>_.reduce(array, (a, b)=> (a && b));
    case 'NOR' : return (array) =>_.reduce(array, (a, b)=> !(a || b));
    case 'NAND' : return (array) =>_.reduce(array, (a, b)=> !(a || b));
    default : return null
  }
};

const argToArray = (...arg) => [...arg];
const lowerCaseMap = (arr) => _.map(arr, _.lowerCase);
const includedArray = (arr) => _.includes(...arr);
const isIncludes = (word1, word2) => _.flow(argToArray, lowerCaseMap, includedArray)(word1, word2);

export { getPosition, reduceLogicalOperator, argToArray, lowerCaseMap, includedArray, isIncludes, getPosition2 }
