const Authentication = require('./controllers/authentication');
const Card = require('./controllers/cards');
const Deck = require('./controllers/decks');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function(app){
  app.get('/', requireAuth, function(req, res) {
    res.send({ hi: 'there'})
  });
  app.post('/signup', Authentication.signup);
  app.post('/cards/mycards/update', Card.updateMyCards);
  app.post('/cards/mycards', Card.mycard);
  app.post('/cards/get-decks', Deck.getDecks);
  app.post('/deck/insert', Deck.insertDeck);
  app.post('/deck/card/remove', Deck.removeCardFromDeck);
  app.post('/deck/card/insert', Deck.insertCardFromDeck);
  app.post('/token', Authentication.token);
  app.post('/signin', requireSignin,  Authentication.signin);
};
