const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
// Define our model
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});
// On Save Hook, encrypt password
userSchema.pre('save', function(next) {
  const user = this;

  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err);}

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err) ;}

      user.password = hash;
      next();
    })
  })
});
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err);}
    callback(null, isMatch);
  })
};
// Create the model class
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;