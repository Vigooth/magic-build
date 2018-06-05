import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash';
import { cardScyfallImage, symbolColor } from "../constantes";
import '../../containers/test.scss';
class CardDetails extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    const
      { card, set } = this.props,
      externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;

    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn} size="lg" style={{maxWidth:'80%'}}>
          <ModalHeader>{card.name}</ModalHeader>
          <ModalBody>
            <img style={{'padding': '2px'}}  src={cardScyfallImage(card.number, set.code, 'en', 'normal' )} style={{width:'366px', height:'510px'}}/>
            {`Card name: ${card.name}`}<br />
            {`Edition: ${set.name}`}<br />
            Mana Cost: <ManaCostSymbol {...card} /><br />
            Card text: {card.text}<br />
            Flavor text: <FlavorText {...card}/><br />
            Rarity: {card.rarity}<br />
            Card number: {card.number}<br />
            Artist: {card.artist}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const ManaCostSymbol = ({ manaCost }) => {
  const convertStringToArray=_.flow([_.startCase, _.words]);
  return _.map(convertStringToArray(manaCost), (item, index) =><img src={symbolColor(item, 'medium')} key={index} name={item} />);
};
const FlavorText = ({flavor}) => <i>{flavor}</i>;
export default CardDetails;
