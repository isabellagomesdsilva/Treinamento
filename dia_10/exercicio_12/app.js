const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("combined"));

const routes = require("./routes/user");

routes(app);

module.exports = app;
