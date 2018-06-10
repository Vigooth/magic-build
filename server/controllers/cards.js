const Card = require('../models/card');
const jwt = require('jwt-simple');
const config = require('../config');

exports.mycard = function(req, res, next) {
  const
    _id = jwt.decode(req.body.token, config.secret).sub,
    { code } = req.body,
    card = new Card ({
      myCards: {[code]: []},
      userId: _id
    });
  // Find if user exist
  Card.findOne({ userId: _id }, function(err, result) {
    console.log(result)
    // If user exists
    if (result) {
      res.send(result.myCards[code])
    }else {
      // Else create new Card
      card.save(function(err, insertedCard){
        res.send(insertedCard)

      })
    }
  })
};
exports.updateMyCards = function(req, res, next) {
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
};
