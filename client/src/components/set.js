import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchSet } from '../actions/index';
import _ from 'lodash';
import Cards from "../containers/cards";
import { Filters } from "../containers/Filters";
import { filterSet } from "../actions/index";
import { getPosition } from "../utils";
import Sorter from "./custom/sorter/Sorter";



class Set extends Component {
  componentWillMount() {
    this.props.fetchSet(this.props.match.params.set);

  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.set.code!==nextProps.set.code){
    }
  }

  onScroll = event => {
    let x = document.getElementsByClassName("filtersGroup")[0];
    let y = document.getElementsByClassName("filterScroll")[0];
    if(getPosition(x).y<0) {
      x.classList.add("fixed")
      y.classList.add("active")
      }
    if(document.documentElement.scrollTop<164) {
      x.classList.remove("fixed")
      y.classList.remove("active")

    }

  };

  render(){
    const { set, set: { cards }, visibilityFilter } = this.props;
    console.log("SET",set);
    console.log("CARDS",cards);

    if(set.code!==this.props.match.params.set) return <div>Loading...</div>;
    return (
      <div className="set">
        <h1 className="titleContainer">{ set.name }</h1>
        <Filters  {...visibilityFilter} />
        <Sorter />
         <div className="filterScroll"/>
        { (set.code!==this.props.match.params.set||cards===undefined)?  <div>Loading...</div>: <Cards {...this.props} set={set} />}

      </div>
    )
  }
}



const mapStateToProps = state => (
  { set: filterSet(state),
    visibilityFilter: state.visibilityFilter}
);

export default  connect(mapStateToProps, { fetchSet })(Set);
