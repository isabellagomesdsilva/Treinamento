const {
  createUser,
  getUsers,
  getOneUser,
  getOneEmail,
  putUser,
  deleteUser,
} = require("../model/user");

const { emailRegex } = require("../validation/emailValidator");

exports.getAll = async (req, res) => {
  const { data: retorno, status } = await getUsers();
  res.status(status).json(retorno);
};

exports.create = async (req, res) => {
  if (!req.body.name.trim() || !req.body.email.trim()) {
    return res
      .status(400)
      .json({ MessageError: "Preenchimento de campo obrigatório" });
  }
  if (req.body.email && !emailRegex(req.body.email)) {
    return res.status(400).json({ MessageError: "Email inválido" });
  }
  let consultaEmail = await getOneEmail(req.body.email);
  if (consultaEmail.data == null) {
    const { data, status } = await await createUser(req.body);
    return res.status(status).json(data);
  }
  return res.status(400).json({ MessageError: "Email já cadastrado" });
};

exports.getOne = async (req, res) => {
  try {
    const { data, status } = await getOneUser(req.params.id);
    data
      ? res.status(status).json(data)
      : res.status(400).json({ MessageError: "ID não cadastrado" });
  } catch {
    console.log("error");
    res.status(400).json({ MessageError: "ID inválido" });
  }
};

exports.put = async (req, res) => {
  try {
    let consultaId = await getOneUser(req.params.id);
    if (consultaId.data != null) {
      if (!req.body.name.trim() || !req.body.email.trim()) {
        return res
          .status(400)
          .json({ MessageError: "Preenchimento de campo obrigatório" });
      }
      if (req.body.email && !emailRegex(req.body.email)) {
        return res.status(400).json({ MessageError: "Email inválido" });
      }
      let consultaEmail = await getOneEmail(req.body.email);
      if (consultaEmail.data == null) {
        const { data, status } = await putUser(req.params.id, req.body);
        return res.status(status).json(data);
      }
      return res.status(400).json({ MessageError: "Email já cadastrado" });
    }
    return res.status(400).json({ MessageError: "ID não cadastrado" });
  } catch {
    console.log("error");
    res.status(400).json({ MessageError: "ID inválido" });
  }
};

exports.remove = async (req, res) => {
  try {
    let consultaId = await getOneUser(req.params.id);
    if (consultaId.data != null) {
    const { data: retorno, status } = await deleteUser(req.params.id);
    res.status(status).json(retorno); }
  } catch {
    console.log("error");
    res.status(400).json({ MessageError: "ID inválido" });
  }
};
