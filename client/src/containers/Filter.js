import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'reactstrap';
import { setVisibilityFilter } from "../actions/index";
import {  FilterOwnBtn, FilterSearchBtn, FilterColorsBtn }  from '../components/set/filters';

const GetFilter = ({ defaultValue, type, setVisibilityFilter }) => {
  const props = {setVisibilityFilter, defaultValue};
  switch (type) {
    case 'colors': return <FilterColorsBtn defaultValue={defaultValue} setVisibilityFilter={setVisibilityFilter}/>;
    case 'own'   : return  <FilterOwnBtn {...props} /> ;
    case 'search': return <FilterSearchBtn {...props} />;
    default: return null
  }
};

const Filter = ({ defaultValue, type, setVisibilityFilter, authenticated }) => {
  return (
    <ButtonGroup className={`${type}`}>
      <GetFilter defaultValue={defaultValue} type={type} setVisibilityFilter={setVisibilityFilter} authenticated={authenticated} />
    </ButtonGroup>)
};
const mapStateToProps = state => (
  { authenticated: state.auth.authenticated}
);
export default  connect( mapStateToProps, { setVisibilityFilter })(Filter);
