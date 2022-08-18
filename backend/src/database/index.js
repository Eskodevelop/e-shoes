const { default: mongoose } = require("mongoose");

const Database = {
  connectToDb: function () {
    const url = "mongodb://localhost:27017/eshoes";
    mongoose
      .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("DATABASE CONNECTED");
      })
      .catch((error) => {
        console.log("DATABASE IS NOT CONNECTED!", error);
      });
  },
};

module.exports = Database;
