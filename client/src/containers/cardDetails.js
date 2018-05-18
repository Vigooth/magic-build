import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash';
class CardDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { card, set } = this.props
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>{card.name}</ModalHeader>
          <ModalBody>
            <img style={{'padding': '2px'}}  src={`http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${card.multiverseid}&type=card`}/>
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
const ColorImg = ({name, size = 'medium',type = 'symbol' }) => (
  <img  src={`http://gatherer.wizards.com/handlers/Image.ashx?size=${size}&name=${name}&type=${type}`} />
)
const ManaCostSymbol = ({ manaCost }) => {
  const convertStringToArray=_.flow([_.startCase, _.words])
  //console.log(convertStringToArray("rr, bb, cc"))
  return _.map(convertStringToArray(manaCost), (item, index) =><ColorImg key={index} name={item} />);
};
const FlavorText = ({flavor}) => <i>{flavor}</i>
export default CardDetails;