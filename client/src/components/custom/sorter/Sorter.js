import React, {Component} from 'react';
import { Input } from "reactstrap";
import { setOrder } from "../../../actions";
import { connect } from "react-redux";

class Sorter extends Component {
  onSorterChanger = (val) => {
    this.props.setOrder( val.target.value)
  };

  render () {
    return (
      <Input className="select-filterMyCards sorter"  type="select" onChange = {this.onSorterChanger}>
        <option  value="all">Sort by</option>
        <option  value="all">Number</option>
        <option  value="rarity">Rarity</option>
        <option value="power">Power</option>
        <option value="artist">Artist</option>
      </Input>
    )
  }
}

export  default connect( null, { setOrder })(Sorter)
