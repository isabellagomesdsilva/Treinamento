const { getAllUsers, createUsers, getOneUsers} = require("../controller/user");
const {
  getAllPoke,
  createPoke,
  getOnePoke,
  putPoke,
  removePoke,
} = require("../controller/pokemon");
const {
  validateCreateUser,
  validateErrorUser,
  validateDuplicatedEmailUser,
  validateCreatePokes,
  validateNotEmailUser,
  validateNamePoke
} = require("../middleware/user");

module.exports = (app) => {
  app.get("/user/all", getAllUsers);
  app.get("/pokemon/all", getAllPoke);
  app.get(
    "/user",
    validateErrorUser,
    validateNotEmailUser,
    getOneUsers
  );
  app.get("/pokemon", getOnePoke);
  app.post("/user", validateCreateUser, validateErrorUser, validateDuplicatedEmailUser, createUsers);
  app.post("/pokemon", validateCreatePokes, validateNamePoke, createPoke);
  app.put("/pokemon/:id", validateNamePoke, putPoke);
  app.delete("/pokemon/:id", removePoke);
};
