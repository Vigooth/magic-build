import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SetControls } from "../../components/set/SetControls";
import { Spinner } from "../../components/card/icons/spinner";
import { fetchMySets, fetchSet, fetchSets, filterSet } from "../../actions/index";
import { fetchMyCards } from "../../actions/cards";
import { visibleDeck, insertDeck, fetchMyDecks, insertCardFromDeck } from "../../actions/deck";
import Card  from '../card';
import Cards from "../cards";
import { IconResizeSideMenu } from "../../components/card/icons/icons";
import { cardSize } from "../../actions/style";
import DeckContent from './DeckContent';
import SideMenuRight from './SideMenuRight';
import { searchCard } from "../../components/constantes";

class MyDecks extends Component {
  static propTypes = {
    visibilityFilter: PropTypes.object.isRequired,
  };
  state = {
    setWidth: '45%',
    menuLeft: {
      isHide: false,
      side: 'left'
    },
    menuRight: {
      isHide: false,
      side: 'right'
    },
  };
  componentWillMount() {
    this.props.fetchSets();
    this.props.fetchMyDecks();
    this.props.fetchSet('AKH');
    this.props.cardSize("small");
  }
  componentWillReceiveProps(props) {
    if (_.isEmpty(this.props.decks)&&!_.isEmpty(props.decks)) {
      this.props.visibleDeck(_.keys(props.decks)[0]);
      this.resizeContent();
    }
  }
  isLoading = () => {
    const { sets, cards } = this.props;
    return _.isEmpty(sets)||_.isEmpty(cards)||(_.isArray(sets))

  };
  isLoading2 = () => {
    const { sets } = this.props;
    return _.isEmpty(sets)
  };
  doesUserHaveCards = () => {
    return !_.isEmpty(this.props.cards.owned.multiverseids);
  };
  toggle = (menu) => {
    this.setState({[menu]: {...this.state[menu], isHide: !this.state[menu].isHide}}, this.resizeContent);
  };
  resizeSideMenu = (menu) => {
    const { isHide, side } = this.state[menu],
      resize = isHide ? {rotate:side ==='left' ? '0' :'180', [side]:'4px'} : {rotate:side ==='left' ? '180' :'0',[side]:'15%'};
    return (
      <div style={{position: 'fixed', bottom:'50%', [side]: resize[side], zIndex: '2', cursor:'pointer'}} onClick={()=>this.toggle(menu)}>
        <IconResizeSideMenu rotate={resize.rotate} size="15"/>
      </div>
    )
  };

  getCards = ( set, myCardsFromThisSet ) => {
    return (
      _.map(set.visibleCards, (multiverseid) => {
        if(myCardsFromThisSet[multiverseid] && myCardsFromThisSet[multiverseid].number)return <Card onCardClick={() => {
          this.props.insertCardFromDeck(this.props.deck.name, {...set.cards[multiverseid], code:set.code})
        }} key={multiverseid}  card={set.cards[multiverseid]} set={set} myCard={myCardsFromThisSet[multiverseid]} multiverseid={multiverseid} />

      })
    )};

  getPage = () => {
    const sets = this.props.set;
    if (!_.isElement(document.getElementById('setScrollbar'))) return null;
    return (
      _.map(sets, set => { return _.size(set.cards)  ?
        <div className="cardsBox" key={set.code} >
          <Cards set={{...set, deck: this.props.deck.name}} template="deck"  scrollId={"setScrollbar"} style={{backgroundColor: 'inherit', border:'none'}} />
        </div> : <h1>No cards for this extension</h1>}
      )
    )
  };
  setsWidth = () => {
    return this.state.menuRight.isHide ? '65%' : '50%';
  };
  resizeContent = () => {
    const $menuRight = $('.menu-sets')[0],
      maxWidth=_.parseInt($menuRight.style.maxWidth);
    if (
      this.state.menuRight.isHide
    ) {
      $('#middle-responsive')[0].style.width = `65%`;
    }
    else if ($menuRight.offsetWidth===maxWidth) {
      $('#middle-responsive')[0].style.width = `calc(100% - 35% - ${maxWidth}px`;
    }
    else {
      $('#middle-responsive')[0].style.width = '50%';
    }

  };
  getSetName = (set) => _.isEmpty(set) ? null : set[_.keys(set)[0]].name;

  render() {

    if (this.isLoading2()) return <Spinner />;
    window.onresize = this.resizeContent;
    const {set, decks} = this.props;
    return (
      <div className="decks" style={{display:'flex', flexDirection:'row'}}>
        <div style={{display:'flex', flexDirection:'column', width: '100%'}}>
          <div className="set" style={{minHeight: 0,height:'90px'}} >
            <SetControls style={{position:'fixed', width:'100%'}} visibilityFilter = {this.props.visibilityFilter}/>
          </div>
          <div className="decks" style={{display:'flex', flexDirection:'row'}}>
            <div style={{flexBasis: '35%', zIndex:'1'}}>
              {_.isNull(decks) ? null : <DeckContent /> }
            </div>
            <div  style={{ flexBasis: '45%', width:'45%', flexGrow: '1', zIndex:'0', height: '78vh'}}>
              <div id="middle-responsive" className="set" style={{width:'50%', position:'fixed', height:'100%', minHeight:'0'}}>
                <h1>{this.getSetName(set)}</h1>
                <div className="scrollbar style-16" id="setScrollbar" style={{ width: "100%",height: '70vh', overflowY: 'overlay'}}>
                  {_.isEmpty(set) ? null :  this.getPage()  }
                </div>
              </div>
            </div>
            <SideMenuRight isHide={this.state.menuRight.isHide}  />
            {this.resizeSideMenu('menuRight')}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => (
  { set: filterSet(state),
    sets:state.sets,
    decks:state.decks,
    deck:state.deck,
    cards: state.cards,
    visibilityFilter: state.visibilityFilter}
);

export default  connect(mapStateToProps, {cardSize, fetchSet, fetchSets, fetchMySets, fetchMyCards, fetchMyDecks, insertDeck, insertCardFromDeck, visibleDeck } )(MyDecks);
