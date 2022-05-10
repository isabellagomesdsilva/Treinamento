const { getAllUsers, createUsers, getOneUsers } = require("../controller/user");
const { getAllPoke, createPoke, getOnePoke, putPoke, removePoke } = require("../controller/pokemon");
/* const {
  validateCreate,
  validateErrorUser,
  paramsId,
  validateFoundById,
  validateDuplicatedEmailUser,
  validateGetAll,
} = require("../middleware/user"); */

module.exports = (app) => {
  app.get("/user", /* validateGetAll, */ getAllUsers);
  app.get("/pokemon/all", /* validateGetAll, */ getAllPoke);
  app.get("/user/:id",/*  paramsId, validateErrorUser, validateFoundById, */ getOneUsers);
  app.get("/pokemon",/*  paramsId, validateErrorUser, validateFoundById, */ getOnePoke);
  app.post("/user", /* validateCreate, validateErrorUser, */ createUsers);
  app.post("/pokemon", /* validateCreate, validateErrorUser, */ createPoke);
  app.put(
    "/pokemon/:id",
   /*  paramsId,
    validateCreate,
    validateErrorUser,
    validateDuplicatedEmailUser,
    validateFoundById, */
    putPoke
  );
  app.delete(
    "/pokemon/:id",
    /* paramsId,
    validateErrorUser,
    validateFoundById, */
    removePoke
  );
};
