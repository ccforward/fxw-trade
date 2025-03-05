const mongoose = require('mongoose');
const { Schema } = mongoose;

const schm = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    required: true,
    default: 10,
  },
  ctime: {
    type: Number,
  },
}, { collection: 'users' });

module.exports = mongoose.model('Users', schm);
