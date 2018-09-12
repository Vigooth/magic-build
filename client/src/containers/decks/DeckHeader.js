import React from "react";
import _ from "lodash";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { getNumberCardsInADeck } from "../../utils/utils_decks";


export class DeckHeader extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  insertDeck = (e) => {
    if (e.key==="Enter" && e.target.value.length) {
      this.props.insertDeck(e.target.value);
      e.target.value=""
    }
};
  render() {
    const
      { decks, deck, visibleDeck } = this.props,
      title = `${deck.name} (${getNumberCardsInADeck(decks[deck.name])})`;

    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <h3>{!_.isEmpty(decks) ? title : "Add a deck"}</h3>
        <DropdownToggle caret>
        </DropdownToggle>
        <DropdownMenu>
          <div className="newDeck" ><input type="text" placeholder="Add a deck" onKeyPress={this.insertDeck} /></div>
          {_.map(_.keys(this.props.decks), deckName =>
            <div className="item"  key={deckName} onClick={() => {visibleDeck(deckName)}}>
              <DropdownItem>{deckName}</DropdownItem>
            </div>
          )}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
