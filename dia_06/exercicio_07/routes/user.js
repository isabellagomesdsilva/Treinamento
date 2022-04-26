const { getAll, create, getOne, put, remove } = require("../controller/user");

module.exports = (app) => {
  app.get("/user", getAll);
  app.post("/user", create);
  app.get("/user/:id", getOne);
  app.put("/user/:id", put);
  app.delete("/user/:id", remove);
};
