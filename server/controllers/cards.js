const Card = require('../models/card');
const jwt = require('jwt-simple');
const config = require('../config');
exports.mycard = function(req, res, next) {
  //res.send(["cc"])
  const _id = jwt.decode(req.body.token, config.secret).sub;
  const code = req.body.code;
  console.log(_id)
  const card = new Card ({
    myCards: {[req.body.code]:[]},
    userId: _id
  });
// Find if user exist
  Card.findOne({userId:_id}, function(err, result) {
    console.log(result)
    // If user exists
    if(result){
      res.send(result.myCards[code])
    }else{
      // Else create new Card
      console.log("inserting new cards")
      card.save(function(err, insertedCard){
        res.send(insertedCard)

      })

    }
  })
};
exports.updateMyCards = function(req, res, next) {
  const _id = jwt.decode(req.body.token, config.secret).sub;
  const card = new Card ({
    myCards: req.body.myCards,
    userId: _id
  });

  Card.findOne({userId:_id}, function(err, result)  {
    if(!result) {
      console.log("saving new")
      card.save()
    }else {
      //{code: HOU, multiverseId:43500}}
/*      if(result.cards[req.body.code][req.body.multiverseid]){
        result.cards[req.body.code][req.body.multiverseid] = {}.number
      }*/
      //result.myCards[req.body.code][""+req.body.card.multiverseid].number =req.body.card.number;
      var a = {[req.body.code]:{...result.myCards[req.body.code],[""+req.body.card.multiverseid]:req.body.card}}
      console.log({...a})
      //result.myCards.number =45;
      //result.myCards[req.body.code][req.body.card.multiverseid] =req.body.card;
      result.myCards =  { ...result.myCards, [req.body.code]:{...result.myCards[req.body.code],[req.body.card.multiverseid]:req.body.card}};
      //Card.update({userId:_id},{$set:{"myCards.HIX": [55,66]}})
      console.log(result.myCards[req.body.code])
      result.save(function(err, updatedCard){
        console.log(result)
        res.send(updatedCard)
      });
      console.log(_id)
      //Card.update({userId:_id},{$set:{userId:_id,owned: req.body.owned}})
      }

  })

};
