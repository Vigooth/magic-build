import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchSet } from '../actions/index';
import PropTypes from 'prop-types';
import Cards from "./cards";
import { filterSet } from "../actions/index";
import { getPosition } from "../utils";
import { SetControls } from "../components/set/SetControls";
import { Spinner } from "../components/card/icons/spinner";
import { zoomInCards } from "../components/symbols";
import Zoom from "../components/card/icons/Zoom"
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
    if (x===undefined) return;
    if (getPosition(x).y < 0) {
      x.classList.add("fixed");
      y.classList.add("active")
    }
    if (document.documentElement.scrollTop < 164) {
      x.classList.remove("fixed");
      y.classList.remove("active")
    }
  };
  isLoading = () => {
    const { set, match : {params } } = this.props;
    return _.isEmpty(set)||set[params.set]===undefined
  };

  render() {
    const { set , visibilityFilter, match : { params } } = this.props;
    return (
      this.isLoading() ?
        <Spinner/> :
        <div className="set">
          <h1 className="titleContainer">{ set[params.set].name }</h1>
          <SetControls visibilityFilter = {visibilityFilter}/>
          <Cards set={set[params.set]} />
        </div>
    )
  }
}

const mapStateToProps = state => (
  { set: filterSet(state),
    visibilityFilter: state.visibilityFilter}
);

export default  connect(mapStateToProps, { fetchSet })(Set);
