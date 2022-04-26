const { getAll } = require("../controller/user");

module.exports = (app) => {
  app.get("/search", getAll);
};
