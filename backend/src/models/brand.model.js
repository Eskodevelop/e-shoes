const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
});

const Brand = mongoose.model("Brand", schema);

module.exports = Brand;
