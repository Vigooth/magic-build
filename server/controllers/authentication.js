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
  console.log(tokenForUser(req.user))
  console.log(tokenForUser(req.user))
  const { user : {_id, email }} = req;
  res.send({
    token: tokenForUser(req.user),
    user: { id:_id, email }
  })
};
exports.token = function(req, res, next) {
  const _id = jwt.decode(req.body.token, config.secret).sub;
  return User.findOne({_id}, function(err, result){res.json({ userId: result })});
  console.log(req.body)
}
exports.signup = function(req, res, next) {

  const { body: {email, password } } = req;
  // See if a user with the given email exists
  User.findOne({ email }, function(err, existingUser) {
    if( !email || !password ) res.status(422).send({error: 'You must provide email and password'});
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
    user.save(function(err, userr) {
      res.json({ token: tokenForUser(user), userr })
    })
  });

};
