import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Input } from 'reactstrap';
import { setVisibilityFilter } from "../../../actions/index";
import { FilterColors, FilterOwn, FilterSearch }  from './test'

class Filter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      colorSelected: this.props.defaultValue || []
    };
    this.onColorClick = this.onColorClick.bind(this);
  }

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

  onOwnChange = ( { target : { value } } ) => {
    this.updateFilter(value)
  };
  onSearchChange = ( { target : { value } } ) =>  {
    this.updateFilter(value);
  };
  getFilter (type) {
    switch (type) {
      case 'colors': return <FilterColors active={this.state.colorSelected} onColorClick={this.onColorClick}/>;
      case 'own'   : return <FilterOwn onOwnChange={this.onOwnChange} />;
      case 'search': return <FilterSearch onSearchChange={this.onSearchChange} />;

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
