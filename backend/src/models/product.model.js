const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: mongoose.Schema.Types.Decimal128,
  codeNum: String,
  brandId: String,
  categoryId: String,
  userId: String,
});

const Product = mongoose.model("Product", schema);

module.exports = Product;
