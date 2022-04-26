const { getAll, create, getOne, put, remove } = require("../controller/user");
const {validateCreate, validateErrorUser, paramsId, validateFoundById, validateDuplicatedEmailUser, validateGetAll} = require('../middleware/user')

module.exports = (app) => {
  app.get("/user", validateGetAll, getAll);
  app.post("/user", validateCreate, validateErrorUser, validateDuplicatedEmailUser, create);
  app.get("/user/:id", paramsId, validateErrorUser, validateFoundById, getOne);
  app.put("/user/:id", paramsId, validateCreate, validateErrorUser, validateDuplicatedEmailUser, validateFoundById, put);
  app.delete("/user/:id",  paramsId, validateErrorUser, validateFoundById, remove);
};
