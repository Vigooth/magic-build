import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'reactstrap';
import { setVisibilityFilter } from "../actions/index";
import { FilterColorsBtn, FilterOwnBtn, FilterSearchBtn }  from '../components/custom/filters'

class Filter extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    defaultValue: PropTypes.arrayOf(PropTypes.string),
    setVisibilityFilter: PropTypes.func.isRequired,
  };

  state = {
    colorSelected: this.props.defaultValue || []
  };

  updateFilter (value) {
    const { type, setVisibilityFilter } = this.props;
    setVisibilityFilter({ [type]: value })
  }

  onColorClick = (selected) => {
    const
      { colorSelected } = this.state,
      index = colorSelected.indexOf(selected);

    (index < 0) ? colorSelected.push(selected) : colorSelected.splice(index, 1);
    this.setState({ colorSelected: [...colorSelected] });
    this.updateFilter([...colorSelected])
  };

  onOwnChange = (e) => {
    this.updateFilter(e.event.target.value);
  };

  onSearchChange = (e) =>  {
    this.updateFilter(e.event.target.value);
  };

  getFilter (type) {
    switch (type) {
      case 'colors': return <FilterColorsBtn active={this.state.colorSelected} onColorClick={this.onColorClick}/>;
      case 'own'   : return <FilterOwnBtn onOwnChange={this.onOwnChange} />;
      case 'search': return <FilterSearchBtn onSearchChange={this.onSearchChange} />;
      default: return null
    }
  }

  render() {
    const { type } = this.props;
    return (
      <ButtonGroup className={`${type}`}>
        { this.getFilter(type) }
      </ButtonGroup>
    );
  }
}

export default connect( null, { setVisibilityFilter })(Filter);
