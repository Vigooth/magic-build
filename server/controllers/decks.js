const Deck = require('../models/deck');
const jwt = require('jwt-simple');
const config = require('../config');
const _ = require('lodash/object');
exports.getDecks = function(req, res, next) {
  const
    _id = jwt.decode(req.body.token, config.secret).sub
  // Find if deck exist
  Deck.findOne({ userId: _id }, function(err, result) {
    console.log(result)
    // If deck exists
    if (result) {
      res.send(result)

    }else {
      // Else create new Card
      const deck = new Deck ({
        deck: null,
        userId: _id
      });
      deck.save(function(err, insertedCard){
        res.send(insertedCard.deck)

      })
    }
  })
};
exports.insertDeck = function(req, res, next) {
  const _id = jwt.decode(req.body.token, config.secret).sub,
    deck = new Deck ({
      decks: {[req.body.name]: null},
      userId: _id
    });
  Deck.findOne({userId:_id}, function(err, result) {
      if (!result) {
        deck.save()
      } else {
        const { name } = req.body;
        result.decks = {...result.decks, ...deck.decks}
        result.save((err, updatedDeck) => {
          if(!err) {res.send(deck.decks)}
        })
      }
    }
  );
};
exports.insertCardFromDeck = (req, res, next) => {
  const _id = jwt.decode(req.body.token, config.secret).sub,
    {deckName, card} = req.body;
  let number;
  Deck.findOne({userId: _id}, function (err, result) {
    if (!result) {
    } else {
    /*  if (result.decks[deckName]) {
        if ()
      }*/
    // CASE DECK NULL
      if (result.decks[deckName] === null) {
        result.decks[deckName] = {[card.code] : {[card.multiverseid] : {multiverseid: card.multiverseid, number: 1}}}
      } else if (result.decks[deckName][card.code] ===undefined) {

        result.decks[deckName][card.code] = {[card.multiverseid] : {multiverseid: card.multiverseid, number: 1}}
      } else if (result.decks[deckName][card.code][card.multiverseid] === undefined){

        result.decks[deckName][card.code][card.multiverseid] =  {multiverseid: card.multiverseid, number: 1}
      } else {result.decks[deckName][card.code][card.multiverseid].number+= 1
      }
      console.log(result.decks[deckName][card.code])
      card.quantity = result.decks[deckName][card.code][card.multiverseid].number;
      if (card.quantity <= 4 || card.types[0]==="Land") {
        result.markModified('decks')
        result.save((err, updatedDeck) => {
          if(!err) {res.send({deckName, card })}
        });
      }

    }
  })
};
exports.removeCardFromDeck = (req, res, next) => {
  const _id = jwt.decode(req.body.token, config.secret).sub,
    {deckName, multiverseId} = req.body;
  let number = 0;
  Deck.findOne({userId: _id}, function (err, result) {
    if (!result) {
    } else {
      const set = _.findKey(result.decks[deckName],  multiverseId);
      if (result.decks[deckName][set][multiverseId].number>1) {
        result.decks[deckName][set][multiverseId].number -=1;
        number = result.decks[deckName][set][multiverseId].number
      } else {
        result.decks[deckName][set] = _.omit(result.decks[deckName][set], multiverseId)
        if (Object.keys(result.decks[deckName][set]).length === 0 && result.decks[deckName][set].constructor === Object) {
          result.decks[deckName] = _.omit(result.decks[deckName], set)
        }
      }

      result.markModified('decks')
      result.save((err, updatedDeck) => {
        if(!err) {res.send({deckName, set, multiverseId, number })}
      });
      console.log(result.decks)

      //console.log(_.omit(result.decks[deckName][set], multiverseId))
    }
  })
};
/*exports.updateMyCards = function(req, res, next) {
  const _id = jwt.decode(req.body.token, config.secret).sub,
    card = new Card ({
      myCards: req.body.myCards,
      userId: _id
    });

  Card.findOne({userId:_id}, function(err, result)  {
    if(!result) {
      card.save()
    }else {
      const {code, card} = req.body;
      result.myCards =  { ...result.myCards, [code]:{...result.myCards[code], [card.multiverseid]: card}};
      result.save(function(err, updatedCard){
        res.send(updatedCard)
      });
    }
  })
};*/
