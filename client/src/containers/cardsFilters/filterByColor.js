import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import {connect} from "react-redux";
import { setVisibilityFilter} from "../../actions";

const FilterByColor = () => {
  return (
    <ButtonGroup>
      <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
      <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
      <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
    </ButtonGroup>
  )
}

export default connect()( {  setVisibilityFilter  })(FilterByColor);