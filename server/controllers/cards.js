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
      result.myCards = { ...result.myCards, ...req.body.myCards};
      result.save(function(err, updatedCard){
        res.send(updatedCard)
      });
      console.log(_id)
      //Card.update({userId:_id},{$set:{userId:_id,owned: req.body.owned}})
      }

  })

};