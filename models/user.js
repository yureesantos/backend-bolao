const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  points: {
    type: Number,
    default: 0,
  },
  cravadas: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('User', userSchema);
