import { Component } from "react";
import React from "react";
import connect from "react-redux/es/connect/connect";
import { insertDeck } from "../../actions/deck";
import { fetchSet, filterSet } from "../../actions/index";
import { isIncludes } from "../../utils";


class SideMenuRight extends Component {

  state = {
      isHide: this.props.isHide || false,
      flexBasis: this.props.isHide ? '2%' : '15%',
      minWidth: '19px',
      maxWidth: '180px',
      position: 'relative',
      display: this.props.isHide ? 'none' :  'block',
      flexDirection:'column',
      backgroundColor: '#464a4c',
      color: '#ddd',
      borderLeft: '3px solid black',
      borderTop: '3px solid black',
      side:'right',
    sideSearchBar: ''

  };
  render() {
    const isHide = this.props.isHide ? {flexBasis: '2%', display:'none'} : {flexBasis: '15%', display:'block'};
    return (
      <div  className="menu-sets" style={{maxWidth: this.state.maxWidth, minWidth: this.state.minWidth, ...isHide}}>
        <div style={{...this.state, ...isHide, position:'fixed', width: '15%', maxWidth:'180px', height:'100%'}}>
          <div className="header">Sets</div>
          <div><input type="text" placeholder="Search" onChange={(e) => {this.setState({'sideSearchBar': e.target.value})}}/></div>
        <div className="scrollbar style-16" style={{position:'fixed', width: '100%', maxWidth:'180px'}}>
          <div className='menu-items'>
            {_.map(_.orderBy(_.filter(this.props.sets, set => isIncludes(set.name,this.state.sideSearchBar)),  'releaseDate', 'desc'), (set)=><div key={set.code} className='item' onClick={()=>this.props.fetchSet(set.code)}>
              <div className="ellipsis">{set.name}</div>
            </div>)}
          </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    decks:state.decks,
    sets:state.sets,
  }
);

export default  connect(mapStateToProps, { fetchSet, insertDeck })(SideMenuRight)
