const { connectToDb } = require("./database");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./router");

const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(cors());

app.use(router(app));

app.listen(2000, () => {
  console.log(`App running on port 2000`);
  connectToDb();
});
