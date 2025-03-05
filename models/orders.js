const mongoose = require('mongoose');
const { Schema } = mongoose;

const schm = new Schema({
  id: {
    type: String,
  },
  createUserId: {
    type: String,
    required: true,
    index: true,
  },
  date: {
    type: Date,
  },
  clientName: {
    type: String,
  },
  invoiceNumber: {
    type: String,
  },
  contractNumber: {
    type: String,
  },
  cargoDetail: {
    type: String,
  },
  // 应收货款
  accountsReceivable: {
    type: String,
  },
  status: {
    type: Number,
    default: 0,
  },
  ctime: {
    type: Number,
  },
}, { collection: 'orders' });

module.exports = mongoose.model('Orders', schm);
