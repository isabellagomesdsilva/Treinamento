
const { getOneEmail, getOneUser, getUsers } = require("../model/user");

const { ObjectId } = require("mongodb");
const res = require("express/lib/response");

exports.paramsId = [
  param("id")
    .notEmpty()
    .custom((value) => ObjectId.isValid(value)),
];

exports.validateCreate = [
  body("name").trim().notEmpty().isString().escape(),
  body("email").trim().notEmpty().isEmail(),
];

exports.validateGetAll = async (req, res, next) => {
  const { data } = await getUsers();
  if (data.length == 0)
    return res
      .status(404)
      .json({ MessageError: "Não tem usuários cadastrados!" });
  return next();
};

exports.validateErrorUser = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ MessageError: error.array() });
  }
  return next();
};

exports.validateDuplicatedEmailUser = async (req, res, next) => {
  const { email } = req.body;
  const { data } = await getOneEmail(email);

  if (data)
    return res.status(400).json({ MessageError: "Email já cadastrado!" });
  return next();
};

exports.validateFoundById = async (req, res, next) => {
  const { id } = req.params;
  const { data } = await getOneUser(id);
  if (!data)
    return res.status(404).json({ MessageError: "Usuário não cadastrado" });
  return next();
};
