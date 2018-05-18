import React, {Component} from "react";
import { Button, ButtonGroup } from 'reactstrap';
const ButtonColor = (props) => {
  return (
    <Button
      style={{'border':'2px black solid', 'background-color': '#464a4c'}}
      active={props.active}
      onClick={() => this.onCheckboxBtnClick(option.value)}
    >
      {props.label}
    </Button>
  )};
const onCheckboxBtnClick = ( selected ) => {
  const index = this.state.cSelected.indexOf(selected);
  if (index < 0) {
    this.state.cSelected.push(selected);
  } else {
    this.state.cSelected.splice(index, 1);
  }
  this.setState({ cSelected: [...this.state.cSelected] });
  this.props.setVisibilityFilter([...this.state.cSelected]);
}
export default  ButtonColor