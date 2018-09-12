const mongoose = require('mongoose');
// Define our model
const deckSchema = new mongoose.Schema({
  decks: Object,
  userId: String
});
// On Save Hook, encrypt password


// Create the model class
const deckModel = mongoose.model('deck', deckSchema);

module.exports = deckModel;
