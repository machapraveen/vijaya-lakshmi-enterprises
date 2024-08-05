const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  batch: { type: String, required: true },
  mfgDate: { type: Date, required: true },
  expDate: { type: Date, required: true },
  rate: { type: Number, required: true },
  cgstAmount: { type: Number, required: true },
  sgstAmount: { type: Number, required: true },
  amount: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  items: [orderItemSchema],
  totalAmount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);