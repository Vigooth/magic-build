const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat:timestamp }, config.secret);
}
exports.signin = function(req, res, next) {
  // User has already had they email and password auth'd
  // We just need to give them a token
  const { user : {_id, email }} = req;
  res.send({
    token: tokenForUser(req.user),
    user: { id:_id, email:email }
  })
};
exports.token = function(req, res, next) {
  const _id = jwt.decode(req.body.token, config.secret).sub;
  return User.findOne({_id}, function(err, result){res.json({ userId: result })});
};
exports.signup = function(req, res, next) {
  const { body: { email, password } } = req;

  // See if a user with the given email exists
  User.findOne({ email }, function(err, existingUser) {

    if( !email || !password ) res.status(422).send({error: 'Hmm, your email or password is incorrect. Please try again.'});
    // If a user with email does exist, return an error
    if(existingUser) {

      return res.status(422).send({error: 'Email is in use'});
    }

    // Is a user with email does NOT exist, create and save user record
    const user = new User ({
      email,
      password
    });
    // Respond to request indicating the user was created
    user.save(function(err) {
      if (err) {
        res.json({err:"Error ! User could not be saved "})}
      else {
        res.json({ token: tokenForUser(user) })
      }
    });
  });
};
