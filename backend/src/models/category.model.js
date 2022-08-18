const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
});

const Category = mongoose.model("Category", schema);

module.exports = Category;
