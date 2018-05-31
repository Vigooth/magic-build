import React, {Component} from 'react';
import {Input} from "reactstrap";
import { setReverser } from "../../../actions";
import {connect} from "react-redux";

class Reverser extends Component {
  onReverserChange = (val) => {
    this.props.setReverser( val.target.value)
  };

  render () {
    return <Input className="select-filterMyCards reverser"  type="select" onChange = {this.onReverserChange}>
      <option  value="">Order</option>
      <option  value="">Asc</option>
      <option value="desc">Desc</option>
    </Input>
  }
}

export  default connect( null, { setReverser })(Reverser)
