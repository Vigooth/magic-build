import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style/style.css'

import { Button, ButtonGroup } from 'reactstrap';
import _ from 'lodash';
import {setVisibilityFilter} from "../../actions";
import ButtonColor from '../../components/custom/ButtonColor'
class Checkbox extends Component {
  constructor (props) {
    super(props);

    this.state = { cSelected: this.props.defaultValue || [] };
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
    console.log()
    this.props.setVisibilityFilter({color:[...this.state.cSelected]});
  }
  checkboxBtn(options){
    console.log("CheckboxBtn", options);
    console.log("CheckboxBtn", this.props);
    console.log("CheckboxBtn", this.props);
    return _.map(options, option =>{
      const active = this.state.cSelected.includes(option.value) ? 'active' : '';
      return <Button  className={`btn-filterColor ${active}`} color="none" key={option.value} onClick={() => this.onCheckboxBtnClick(option.value)} >{option.label}</Button>


    })//return _.map(options, option => <ButtonColor  key={option.value} onClick={() => this.onCheckboxBtnClick(option.value)} active={this.state.cSelected.includes(option.value)} label={option.label}/>)

  }

  render() {
    const { options } = this.props;
    return (
      <div>
        <ButtonGroup>
          {this.checkboxBtn(options)}
        </ButtonGroup>
        <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
      </div>
    );
  }
}

export default  connect(null, { setVisibilityFilter })(Checkbox);