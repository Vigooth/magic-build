import React, { Component } from 'react';
import { getPosition, getPosition2 } from "../utils";
import { ButtonAddItem } from "./ButtonAddItem";
import _ from 'lodash';
import PropTypes from 'prop-types';


class LazyComponent extends Component {
  static propTypes = {
    step: PropTypes.number,
    init: PropTypes.number,
    yPosMax: PropTypes.number,
    classname: PropTypes.string,
    lazyKey: PropTypes.string,
    autoLoading: PropTypes.bool,
    scrollId: PropTypes.string

  };

  scrollDOM = document.getElementById(this.props.scrollId);

  defaultState = {
    step: this.props.iteration || 20,
    MAX_ITEM: this.props.children.length,
    numberVisibleItem: this.props.init || 20,
    lazyKey: this.props.lazyKey || "lazy-unique",
    autoLoading:  !(this.props.autoLoading === false),
    lastItem: null,
    firstItem: null,
    scrollId: this.scrollDOM || window,
    yPosMax: this.scrollDOM ? this.scrollDOM.scrollHeight: window.innerHeight,
  };

  state = this.defaultState;

  componentDidMount() {
    this.state.scrollId.addEventListener('scroll', this.onScroll, false);
    this.setFirstAndLastPosition();
  }

  componentWillReceiveProps({ children }) {
    if (children.length !== this.props.children.length) {
      this.resetDefaultState(children);
    }
  }

  componentWillUnmount() {
    this.state.scrollId.removeEventListener('scroll', this.onScroll, false);
  }

  resetDefaultState = (children) => {
    this.setState({ numberVisibleItem: this.defaultState.numberVisibleItem, MAX_ITEM: children.length });
  };

  setFirstAndLastPosition = () => {
    const
      items = document.getElementsByClassName(this.state.lazyKey)[0].getElementsByClassName(this.props.classname),
      lastItem = items[items.length-1],
      firstItem = items[0];
    this.setState({ firstItem, lastItem })
  };

  addVisibleItem = () => {
    this.setState({numberVisibleItem: this.state.numberVisibleItem + this.state.step }, this.setFirstAndLastPosition)
  };

  isScrollbarOnTheLastItem = () => {
    const scrollTop = this.props.scrollId ?  $(`#${this.props.scrollId}`)[0].scrollTop  : window.pageYOffset;
    return this.state.lastItem.offsetTop - scrollTop < this.state.yPosMax
  };

  checkIfNeedsMoreItem = () => {
    if (!this.state.firstItem) return ;
    if (this.isScrollbarOnTheLastItem()) {
      this.updateItems();
    }
  };

  onScroll = () => {
    if (this.state.autoLoading) {
      this.checkIfNeedsMoreItem();
    }
  };

  updateItems = () => {
    const isMoreItem = this.state.numberVisibleItem < this.state.MAX_ITEM;
    if (isMoreItem) {
      this.addVisibleItem();
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
      <div className={`LimitVisibleCard ${this.state.lazyKey}`}>
        { this.visibleItems() }
        <ButtonAddItem {...this.state} onClick={this.updateItems} />
      </div>
    )
  }
}
export default LazyComponent;
