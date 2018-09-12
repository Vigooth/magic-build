import React, { Component } from 'react';
import _ from 'lodash';
import { Button } from "reactstrap";
import { IconMinus, IconPlus, IconWishList } from "../../icons/icons";
import CardDetails from "../../CardDetails";
import { START_UPDATING_MYCARDS } from "../../../../actions/types";


export const defaultTemplate = (props) => {
  const top = () =><div><IconWishList/></div>;
  const middle = () =><CardDetails buttonLabel="Details" set={props.set} card={props.card}/>;
  const bottom= () => <SetCardOwn {...props} />;
  return {top,middle, bottom}
};

const debounceFn = _.debounce((fn, multiverseid, code, numberOfCardOwned) => {
  fn(multiverseid, code, numberOfCardOwned)
}, 1000);

const debounceFn2 = _.debounce((fn, type, multiverseid) => {
  fn(type, multiverseid)
}, 1000);

class SetCardOwn extends Component {
  state = {
    numberOfCardOwned: this.props.cardOwned.number || 0
  };
  incOrDec = (operation, value) => {
    switch (operation) {
      case "INC" :
        return ++value;
      case "DEC" :
        return (value > 0) ? --value : 0;
    }
  };
  updateNumberOfCardOwned = () => {
    const {
        card: {multiverseid},
        set: {code},
        updateMyCards, startLoading
      } = this.props,
      { numberOfCardOwned } = this.state;
    debounceFn2(startLoading,START_UPDATING_MYCARDS, multiverseid );
    debounceFn(updateMyCards, multiverseid, code, numberOfCardOwned);
  };
  setNumberOfCardOwned = (op) => {
    this.setState({numberOfCardOwned: this.incOrDec(op, this.state.numberOfCardOwned)},
      this.updateNumberOfCardOwned)
  };

  render() {
    return (
      <div className="copiesNumber">
        <span className="minus" onClick={() => {this.setNumberOfCardOwned("DEC")}}>
          <IconMinus size="25px" color="#e0c6d0"/>
        </span>
        <span>{this.state.numberOfCardOwned}</span>
        <span className="plus" onClick={() => {this.setNumberOfCardOwned("INC")}}>
          <IconPlus size="25px" color="#e0c6d0"/>
        </span>
      </div>

    )
  }
}

