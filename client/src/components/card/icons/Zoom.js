import React, { Component } from 'react';
import { connect } from "react-redux";
import { cardSize } from "../../../actions/style";

const ZoomInCards = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="Calque_1"
    onClick={props.onClick}
    style={props.style}
    viewBox="0 0 72 43"
    width={props.width || "72"}
    height={props.height || "43"}
  >
    <g
      id="layer1"
      style={{"display":"inline"}}
      transform="translate(-0.29550826,-0.105406)"><g
      id="g51"
      transform="translate(-11.10238,-22.894594)"><path
      d="M 80.2,44.3 C 74.8,52.4 65.5,63.1 47.3,63.1 29.1,63.1 20.5,53.5 14.4,44.3 20.8,34.7 29.1,25.5 47.3,25.5 65.5,25.5 75,36.4 80.2,44.3 Z"
      id="path37"
      style={{"fill":"white","stroke":"#000000","strokeWidth":"5","strokeMiterlimit":"10"}} /><circle
      cx="47.299999"
      cy="44.299999"
      r="12.3"
      id="circle49"
      style={{"fill":"#e3a8a8","stroke":"#000000","strokeWidth":"5","strokeMiterlimit":"10"}} />
    </g></g><g
    id="layer2"
    style={{"display":"inline"}}
    transform="translate(-0.29550826,-0.105406)"><g
    id="g157"
    transform="matrix(0.09273886,0,0,0.09295723,22.059655,7.4821351)"><g
    id="g155"><path
    style={{"fill":"#010002"}}
    d="M 152.112,0 C 68.241,0 0.008,68.244 0.008,152.114 c 0,83.865 68.233,152.109 152.103,152.109 83.865,0 152.103,-68.244 152.103,-152.109 C 304.215,68.244 235.977,0 152.112,0 Z m 0,275.989 c -68.32,0 -123.891,-55.565 -123.891,-123.875 0,-68.326 55.571,-123.891 123.891,-123.891 68.32,0 123.891,55.565 123.891,123.891 0,68.31 -55.577,123.875 -123.891,123.875 z"
    id="path151" /><path
    style={{"fill":"#010002"}}
    d="M 221.922,139.186 H 165.035 V 82.298 c 0,-7.141 -5.782,-12.929 -12.923,-12.929 -7.141,0 -12.929,5.782 -12.929,12.929 v 56.887 H 82.296 c -7.141,0 -12.923,5.782 -12.923,12.929 0,7.141 5.782,12.923 12.923,12.923 h 56.882 v 56.893 c 0,7.142 5.787,12.923 12.929,12.923 7.141,0 12.929,-5.782 12.929,-12.923 v -56.893 h 56.882 c 7.142,0 12.929,-5.782 12.929,-12.923 0.004,-7.147 -5.784,-12.928 -12.925,-12.928 z"
    id="path153"/></g></g></g>
  </svg>
);
const ZoomOutCards = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="Calque_1"
    onClick={props.onClick}
    viewBox="0 0 72 43"
    width={props.width || "72"}
    height={props.height || "43"}
    style={props.style}
  >
    <g
      id="layer1"
      style={{"display":"inline"}}
      transform="translate(-0.29550826,-0.105406)"><g
      id="g51"
      transform="translate(-11.10238,-22.894594)"><path
      d="M 80.2,44.3 C 74.8,52.4 65.5,63.1 47.3,63.1 29.1,63.1 20.5,53.5 14.4,44.3 20.8,34.7 29.1,25.5 47.3,25.5 65.5,25.5 75,36.4 80.2,44.3 Z"
      id="path37"
      style={{"fill":"white","stroke":"#000000","strokeWidth":"5","strokeMiterlimit":"10"}} /><circle
      cx="47.299999"
      cy="44.299999"
      r="12.3"
      id="circle49"
      style={{"fill":"#c7c7c7","stroke":"#000000","strokeWidth":"5","strokeMiterlimit":"10"}} />
    </g></g>
    <g
      id="layer3"
      style={{"fill":"#010002"}}
      id="g303"
      transform="matrix(0.49754913,0,0,0.50308965,22.026751,7.5460386)"><path
      d="M 27.851,0 C 12.495,0 0,12.495 0,27.852 0,43.209 12.495,55.703 27.851,55.703 43.208,55.703 55.703,43.209 55.703,27.852 55.703,12.495 43.209,0 27.851,0 Z m 0,51.213 C 14.969,51.213 4.489,40.733 4.489,27.851 4.489,14.969 14.97,4.489 27.851,4.489 c 12.883,0 23.364,10.48 23.364,23.362 0,12.882 -10.481,23.362 -23.364,23.362 z"
      id="path299" /><path
      d="M 38.325,25.607 H 17.379 c -1.239,0 -2.244,1.005 -2.244,2.244 0,1.239 1.005,2.245 2.244,2.245 h 20.946 c 1.239,0 2.244,-1.006 2.244,-2.245 0,-1.239 -1.005,-2.244 -2.244,-2.244 z"
      id="path301" /></g>
  </svg>
);
class Zoom extends Component {
  render () {
    return (
      <button className='btn-cardsSize' title="Change the size of the cards"> {this.props.style.cardsSize === "medium" ?
        <ZoomInCards onClick={() => this.props.cardSize("large")} width={36*1.2} height={21.5*1.2} style={{display: 'flex'}}/> :
        <ZoomOutCards onClick={() => this.props.cardSize("medium")} width={36*1.2} height={21.5*1.2} style={{display: 'flex'}}/>}
      </button>
    )
  }
}
const mapStateToProps = state => (
  { style: state.style}

);
export default connect(mapStateToProps, { cardSize })(Zoom)
