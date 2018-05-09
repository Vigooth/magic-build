const mongoose = require('mongoose');
// Define our model
const cardsSchema = new mongoose.Schema({
  myCards: Object,
  userId: String
});
// On Save Hook, encrypt password


// Create the model class
const cardsModel = mongoose.model('card', cardsSchema);

module.exports = cardsModel;