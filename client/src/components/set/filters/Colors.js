import React from 'react';
import { Button } from 'reactstrap';
import { colorsIdentity, symbolColor } from "../../constantes";

class FilterColorsBtn extends React.Component {
  state= {
    isActive:  this.props.defaultValue
  };

  onChange = (value, defaultValue) => {
    this.props.setVisibilityFilter({ "colors": updateColors(value, defaultValue) });
    this.setState({isActive: defaultValue})
  };

  render() {
    const { defaultValue } = this.props;
    return _.map(colors, color => {
      const isActive = this.state.isActive.includes(color.value) ? 'active' : '';
      return (
        <Button
          className={`btn-filterColor ${isActive}`}
          color="none"
          p={color.value}
          key={color.value}
          onClick={() => this.onChange(color.value, defaultValue)}
        >
          {color.label}
        </Button>)
    })
  }
}

const updateColors = (value, array) => {
  const index = _.indexOf(array, value);
  (index < 0) ? array.push(value) : _.pull(array, value);
  return array
};
const filterByColor = (cards, names) => _.filter( cards, card => _.intersection(card.colorIdentity,names).length === names.length );

const colors = _.map(colorsIdentity, colorIdentity => ({ label: symbolColor(colorIdentity, '25px'), value: colorIdentity }));

export  { FilterColorsBtn, filterByColor }
