import React, { Component } from 'react';
import _ from 'lodash';
import { getPosition } from "./utils";
import { Button } from "reactstrap";

class LazyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: this.props.iteration || 20,
      visibleItem: this.props.init || 20,
      yPosMax: window.innerHeight,
      visibilityLoadMoreButton : 'visible'
    };
    this.updateVisibleItem = this.updateVisibleItem.bind(this)
    this.hideButton = this.hideButton.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollAsset, false);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children.length !== this.props.children.length){
      this.setState({visibleItem: this.state.visibleItem})
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollAsset, false);
  }

  updateVisibleItem() {
    this.setState({visibleItem: this.state.visibleItem + this.state.step })
  }

  scrollAsset = () => {
    let lastCard = document.getElementsByClassName(this.props.classname ||"cardBox");
    if (getPosition(lastCard[lastCard.length-1]).y < this.state.yPosMax - lastCard[0].clientHeight) {
      const allCardsAreNotDisplayed = this.state.visibleItem < this.props.children.length;
      if (allCardsAreNotDisplayed) {
        this.updateVisibleItem()
      } else {
        this.hideButton();
      }
    }
  };

  hideButton() {
    this.setState({loadMoreButton: 'hidden'})
  }
  forceUpdate = () =>{
    const allCardsAreNotDisplayed = this.state.visibleItem < this.props.children.length;
    if (allCardsAreNotDisplayed) {
      this.updateVisibleItem()
    }
  };

  limitVisibleCard = () => {
    const
      { visibleItem } = this.state,
      { children } = this.props;

    return _.map(children, (item, length) => {
      if (length < visibleItem) {
        return item
      }});
  };

  render() {
    return (
      <div className="LimitVisibleCard">
        { this.limitVisibleCard(this.props)}
        <Button
          className="loadMore"
          style={{visibilityLoadMoreButton:this.state.visibilityLoadMoreButton}}
          onClick={this.forceUpdate}>Load more</Button>
      </div>
    )
  }
}

export default LazyComponent;
