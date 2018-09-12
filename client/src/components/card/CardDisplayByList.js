import React, { Component } from 'react';
import _ from 'lodash';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { symbolColor } from "../constantes";
import { IconMinus, IconPlus } from "./icons/icons";
import { START_UPDATING_MYCARDS } from "../../actions/types";
import connect from "react-redux/es/connect/connect";
import { startLoading, updateMyCards } from "../../actions/cards";
import { Spinner } from "./icons/spinner";
const ManaCostSymbol = ({manaCost}) => {
  const convertStringToArray=_.flow([_.startCase, _.words]);
  return _.map(convertStringToArray(manaCost), (item, index) =><span key={index}>{symbolColor(item, '15px')}</span>);
};
const debounceFn = _.debounce((fn, multiverseid, code, numberOfCardOwned) => {
  fn(multiverseid, code, numberOfCardOwned)
}, 1000);
const debounceFn2 = _.debounce((fn, type, multiverseid) => {
  fn(type, multiverseid)
}, 1000);
class CardDisplayByList extends Component {
  state = {
    numberOfCardOwned: 0
  };
  incOrDec = (operation, value) => {
    switch (operation) {
      case "INC" :
        return ++value;
      case "DEC" :
        return (value > 0) ? --value : 0;
    }
  };
  setNumberOfCardOwned = (op, value) => {
    this.setState({numberOfCardOwned: {[value.multiverseid]: this.incOrDec(op, value.number)}},
      () => this.updateNumberOfCardOwned(value.multiverseid))
  };

  updateNumberOfCardOwned = (multiverseid) => {
    const {
        set: {code},
        updateMyCards, startLoading
      } = this.props,
      { numberOfCardOwned } = this.state;
    debounceFn2(startLoading,START_UPDATING_MYCARDS, multiverseid );
    debounceFn(updateMyCards, multiverseid, code, numberOfCardOwned[multiverseid]);
  };

  render() {
    const { cards, visibleCards, myCards } = this.props;
    const data = _.map(visibleCards, multiverseid => ({
      name: cards[multiverseid].name,
      number: cards[multiverseid].number,
      rarity: cards[multiverseid].rarity.charAt(0),
      mana: cards[multiverseid].manaCost,
      types: _.join(cards[multiverseid].types, ', '),
      power: _.isUndefined(cards[multiverseid].power) ? '' :`${cards[multiverseid].power}/${cards[multiverseid].toughness}`,
      owned: {multiverseid: multiverseid, id:multiverseid, number: myCards[multiverseid] ? myCards[multiverseid].number || null : null }
    }));
    const columns = [{
      Header: 'Rarity',
      accessor: 'rarity',
      maxWidth: 37,
    },{
      Header: 'N.',
      accessor: 'number',
      maxWidth: 37,
    },{
      Header: 'Name',
      className: "left",
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Mana',
      accessor: 'mana',
      Cell: props => <ManaCostSymbol manaCost={props.value}/> // Custom cell components!
    },{
      Header: 'Types',
      accessor: 'types',
    }, {
      Header: 'P/T',
      accessor: 'power',
      maxWidth: 50,

    },{
      Header: 'Quantity',
      accessor: 'owned',
      maxWidth: 80,
      sortMethod: (a, b) => a.number >= b.number ? 1 : -1,
      Cell: props => {
        const refreshValue =  this.state.numberOfCardOwned[props.value.multiverseid] ? this.state.numberOfCardOwned[props.value.multiverseid]  :props.value.number;
       props.value.number = refreshValue;
        return (
          <div style={{'display':'flex','width':'70px','justifyContent': 'space-between'}}>
            <span className="minus" onClick={() => {this.setNumberOfCardOwned("DEC", props.value)}}>
              <IconMinus size="25px" color="#e0c6d0"/>
            </span>
            <span>{props.value.multiverseid === this.props.loading ? <Spinner size={25}/> : refreshValue}</span>
            <span className="plus" onClick={() => {this.setNumberOfCardOwned("INC", props.value)}}>
              <IconPlus size="25px" color="#e0c6d0"/>
            </span>
          </div>)}

    }, ];
    return (
      <ReactTable
        getTheadTrProps={() => ({style:{textAlign:'left', fontWeight: 'bold'}})}
        getTrProps={(state, rowInfo) => {return (rowStyle(rowInfo))}}
        defaultPageSize={visibleCards.length}
        showPagination={false}
        minRows = {0}
        data={data}
        columns={columns}
      />
    )
  }
}
const rowStyle = ({row}) => {
  return ({
    style: {
      height:'33px',
      background: row.owned.number >0 ? 'rgba(170, 224, 250, 0.27)' : 'rgba(70, 74, 76, 0.12)',
      borderRadius: row.owned.number >0 ? '5%' : '',
    },
  })
}
const mapStateToProps = state => (
  { style: state.style,
    loading: state.loading.card
  }
);
export default connect(mapStateToProps, { updateMyCards, startLoading })(CardDisplayByList);
