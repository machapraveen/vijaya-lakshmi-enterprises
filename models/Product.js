const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hsnCode: { type: String, required: true },
  unit: { type: String, required: true },
  cgstPercentage: { type: Number, required: true },
  sgstPercentage: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);