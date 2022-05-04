const express = require("express");
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())

const routes = require("./routes/user");

routes(app);

module.exports = app;
