import React, {Component} from 'react';
import LazyComponent from "../LazyComponent";
import { fetchSets } from "../actions/index";
import { connect } from "react-redux";
import { RenderSetsByReleaseDate } from "../components/SetListByReleaseDate";

class Home extends Component {

  componentWillMount() {
    this.props.fetchSets()
  }

  render(){
    const { sets } = this.props;
    return (
      <div className="home">
        <h1 className="titleContainer">Pick an edition</h1>
        <div className="setsBox">
          <LazyComponent classname="setByYear" init={3} iteration={3}>
            {RenderSetsByReleaseDate(sets) }
          </LazyComponent>
        </div>
      </div>
    )}
}

const mapStateToProps = state => (
  {
    sets: state.sets}
);

export default   connect(mapStateToProps, { fetchSets })(Home)
