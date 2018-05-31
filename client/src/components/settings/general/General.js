import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: null,
      email:true,
      password: true
    }
  }
  componentDidUpdate() {
    if(this.state.currentForm) {document.getElementById(this.state.currentForm).focus() };
  }
  setTest = (event) =>{
    this.setState({[event]:!this.state[event], currentForm:this.state[event] ? [event] : null})
    document.getElementById(event).focus();
  };

  render() {
    const { email, passowrd } = this.state

    return (
      <div>
      <InputGroup>
          <Input id="email" placeholder={"email"} disabled={email } value={"vigooth@mail.com"}/>
          <InputGroupAddon addonType="append"><Button color="secondary" onClick={()=>this.setTest("email")}>Change</Button></InputGroupAddon>
      </InputGroup>
        <InputGroup>
          <Input id="password" placeholder={"email"} disabled={passowrd} />
          <InputGroupAddon addonType="append"><Button color="secondary" onClick={()=>this.setTest("password")}>Change</Button></InputGroupAddon>
      </InputGroup>
      </div>
    )
  }
}

const mapStateToProps = state => ({}
)
export default connect(mapStateToProps, null)(General);
