const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const bugSchema = new Schema({
  text: {type: String, required: true},
  name: {type: String, required: true}
},{
  timestamps: true
});

module.exports = mongoose.model('Bug', bugSchema);