import React, { Component } from 'react';

import { Button, ButtonGroup } from 'reactstrap';


const CheckboxBtn = ({options}) => {
  console.log("CheckboxBtn", options);
  return options.map(option => <Button color="primary" onClick={() => this.onCheckboxBtnClick(option.value)} active={this.state.cSelected.includes(option.value)}>{option.label}</Button>)

}
export default CheckboxBtn;