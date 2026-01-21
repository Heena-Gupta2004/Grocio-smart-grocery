const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  category: String,
  price: Number,
  imageUrl: String
});

module.exports = mongoose.model("Product", productSchema);
