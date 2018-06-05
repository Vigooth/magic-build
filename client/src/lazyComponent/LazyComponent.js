import React, { Component } from 'react';
import { getPosition } from "../utils";
import { ButtonAddItem } from "./ButtonAddItem";
import _ from 'lodash';

class LazyComponent extends Component {
  defaultState = {
    step: this.props.iteration || 20,
    MAX_ITEM: this.props.children.length,
    numberVisibleItem: this.props.init || 20,
    lastItem: null,
    firstItem: null,
    yPosMax: window.innerHeight
  };
  state = this.defaultState;

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    this.setFirstAndLastPosition();
  }

  componentWillReceiveProps({ children }) {
    if (children.length !== this.props.children.length) {
      this.resetDefaultState(children);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  resetDefaultState = (children) => {
    this.setState({ numberVisibleItem: this.defaultState.numberVisibleItem, MAX_ITEM: children.length });
  };

  setFirstAndLastPosition = () => {
    const
      items = document.getElementsByClassName(this.props.classname),
      lastItem = items[items.length-1],
      firstItem = items[0];
    this.setState({ firstItem, lastItem })
  };

  addVisibleItem = () => {
    this.setState({numberVisibleItem: this.state.numberVisibleItem + this.state.step })
  };

  checkIfNeedsMoreItem = () => {
    if (!this.state.firstItem) return ;
    const isScrollbarOnTheLastItem = getPosition(this.state.lastItem).y < this.state.yPosMax - this.state.firstItem.clientHeight;
    if (isScrollbarOnTheLastItem) {
      this.updateItems();
    }
  };

  onScroll = () => {
    this.checkIfNeedsMoreItem();
  };

  updateItems = () => {
    const isMoreItem = this.state.numberVisibleItem < this.state.MAX_ITEM;
    if (isMoreItem) {
      this.addVisibleItem();
      this.setFirstAndLastPosition();
    }
  };

  visibleItems = () => {
    const
      { numberVisibleItem } = this.state,
      { children } = this.props;

    return _.map(children, (item, index) => {
      if (index < numberVisibleItem) {
        return item
      }});
  };

  render() {
    return (
      <div className="LimitVisibleCard">
        { this.visibleItems() }
        <ButtonAddItem {...this.state} onClick={this.updateItems} />
      </div>
    )
  }
}
export default LazyComponent;
