import React, {Component} from 'react';
import LazyComponent from "../lazyComponent/LazyComponent";
import { fetchSets } from "../actions/index";
import { connect } from "react-redux";
import { SetsByReleaseDateList } from "../components/SetListByReleaseDate";
import { Spinner } from "../components/card/icons/spinner";

class Home extends Component {

  componentWillMount() {
    this.props.fetchSets()
  }
  isLoading() {
    const { sets } = this.props;
    return _.isEmpty(sets)||!_.isArray(sets);
  }

  render() {
    const { sets } = this.props;
    if (this.isLoading()) return <Spinner />;
    return (
      <div className="home">
        <h1 className="titleContainer">Pick an edition</h1>
        <div className="setsBox">
          <LazyComponent classname="setByYear" init={3} iteration={3}>{SetsByReleaseDateList(sets)}</LazyComponent>
        </div>
      </div>
    )}
}

const mapStateToProps = state => (
  {
    sets: state.sets}
);

export default   connect(mapStateToProps, { fetchSets })(Home)
