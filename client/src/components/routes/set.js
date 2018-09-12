import React, { Component } from 'react';
import { Spinner } from "../card/icons/spinner";
import { connect } from "react-redux";
import { fetchSet, fetchSets } from "../../actions";

class SetItem extends Component {
  state = {
    isFetching : false
  };
  onSetItemClick = (code, history) => {
    this.setState({isFetching:true})
    this.props.fetchSet(code).then((a)=>{ if(a){history.push(`/set/${code}`)}});
    // history.push(`/set/${code}`)
  };
  render() {
    const {code, name, cardsNumber, history }= this.props;
    return (
      <span className="edition" key={code} onClick={()=>this.onSetItemClick(code, history)}>
        <a>
          <div style={{ flexShrink:'4'}}>{null}</div>
          <div style={{display:'flex', flexShrink:'1'}}>{name} <p style={{fontSize:'22px'}}>({cardsNumber}) </p></div>
          {this.state.isFetching ? <Spinner size={30} style={{display: 'flex', width:"initial", flexShrink:'4'}}/>: <div/>}
          </a>
      </span>
    )
  }
}
export default   connect(null, {  fetchSet })(SetItem)

