import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchSet } from '../actions/index';
import _ from 'lodash';

import PropTypes from 'prop-types'
import Cards from "./cards";
import { Filters } from "../components/Filters";
import { filterSet } from "../actions/index";
import { getPosition } from "../utils";
import Sorter from "../components/custom/sorter/Sorter";
import Reverser from "../components/custom/reverser/Reverser";

class Set extends Component {
  static propTypes = {
    set: PropTypes.object.isRequired,
    visibilityFilter: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.fetchSet(this.props.match.params.set);

  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    this.toggleFilterBarOnTop();
  };

  toggleFilterBarOnTop = () => {
    let
      x = document.getElementsByClassName("filtersGroup")[0],
      y = document.getElementsByClassName("filterScroll")[0];
    if (getPosition(x).y < 0) {
      x.classList.add("fixed");
      y.classList.add("active")
    }
    if (document.documentElement.scrollTop < 164) {
      x.classList.remove("fixed");
      y.classList.remove("active")
    }
  };

  render() {
    const { set, visibilityFilter } = this.props;

    if (set.code!==this.props.match.params.set) return <div>Loading...</div>;
    return (
      <div className="set">
        <h1 className="titleContainer">{ set.name }</h1>
        <Filters  {...visibilityFilter} />
        <div className="filter-order">
          <Sorter />
          <Reverser />
        </div>
        <div className="filterScroll"/>
        <Cards {...this.props} set={set} />
      </div>
    )
  }
}

const mapStateToProps = state => (
  { set: filterSet(state),
    visibilityFilter: state.visibilityFilter}
);

export default  connect(mapStateToProps, { fetchSet })(Set);
