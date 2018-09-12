import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash';
import { cardScyfallImage, symbolColor, symbolColor2 } from "../constantes";
import '../../containers/test.scss';
import { FlagFrance, FlagUnitedKingdom } from "../flags";
class CardDetails extends Component {
  state = {
    modal: false,
    language: 'en',
    cardName: this.props.card.name
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  switchLanguage = (languageCode) => {
    if (!this.props.card.foreignName) return;
    if(languageCode !==this.state.language ) {
      const cardName = languageCode === 'fr' ? _.keyBy(this.props.card.foreignNames, 'language')["French"].name : this.props.card.name;
      this.setState({language: languageCode, cardName});

    }
  }
  render() {
    const
      { card, set, style } = this.props,
      externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      [
        this.props.children ? <Button key={1} style={style} onClick={this.toggle}>{this.props.children}</Button>  :  <Button key={1}color="danger" style={{...style}} onClick={this.toggle}>{this.props.buttonLabel}</Button>,

        <Modal key={2} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn} size="lg" style={{maxWidth:'80%'}}>
            <div className="modal-header" style={{display: 'flex', justifyContent: "space-between"}}>
                <h4>{this.state.cardName}</h4>
                <div>
                  <button className="btn btn-none" style={{backgroundColor: this.state.language==='fr' ? '#dfdfdf' : 'inherit', cursor: 'pointer'}} onClick={() =>this.switchLanguage('fr')}> <FlagFrance scale={0.3}/></button>
                  <button className="btn btn-none" style={{backgroundColor: this.state.language==='en' ? '#dfdfdf' : 'inherit', cursor: 'pointer'}} onClick={() =>this.switchLanguage('en')}> <FlagUnitedKingdom scale={0.3} /></button>
                </div>
            </div>

          <ModalBody style={{'display': 'flex', 'justifyContent':'space-around', 'flexWrap':'wrap'}}>
            <div style={{'flexBasis':'30%'}}><img style={{'padding': '2px', width:'366px', height:'510px'}}  src={cardScyfallImage(card.number, set.code || set,  this.state.language, 'normal' )} /></div>
            <div className='details' style={{'flexGrow':'1', 'flexBasis':'30%'}}>
              <h2>Details</h2>
              {`Card name: ${card.name}`}<br />
              {`Edition: ${set.name}`}<br />
              Mana Cost: <ManaCostSymbol {...card} /><br />
              Card text: {card.text}<br />
              Flavor text: <FlavorText {...card}/><br />
              Rarity: {card.rarity}<br />
              Card number: {card.number}<br />
              Artist: {card.artist}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      ]);
  }
}
const ManaCostSymbol = ({ manaCost }) => {
  const convertStringToArray=_.flow([_.startCase, _.words]);
  return _.map(convertStringToArray(manaCost), (item, index) =><span key={index}>{symbolColor(item, '15px')}</span>);
};
const FlavorText = ({flavor}) => <i>{flavor}</i>;
export default CardDetails;
