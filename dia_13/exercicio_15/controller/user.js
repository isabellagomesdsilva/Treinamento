const {
  createUser,
  getUsers,
  getOneUser,
  putUser,
  deleteUser,
} = require("../model/user");

exports.getAll = async (req, res) => {
  try {
    let { limit = 30, page = 0 } = req.query;
    const { data: retorno, status } = await getUsers(
      Number(page),
      Number(limit)
    );
    return res.status(status).json(retorno);
  } catch (error) {
    return res.status(500).json({ MessageError: "Erro não esperado!" });
  }
};

exports.create = async (req, res) => {
  try {
    const { data: retorno, status } = await createUser(req.body);
    return res.status(status).json(retorno);
  } catch (error) {
    return res.status(500).json({ MessageError: "Erro não esperado!" });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { data: retorno, status } = await getOneUser(req.params.id);
    return res.status(status).json(retorno);
  } catch (error) {
    return res.status(500).json({ MessageError: "Erro não esperado!" });
  }
};

exports.put = async (req, res) => {
  try {
    const { data: retorno, status } = await putUser(req.params.id, req.body);
    res.status(status).json(retorno);
  } catch (error) {
    return res.status(500).json({ MessageError: "Erro não esperado!" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { data: retorno, status } = await deleteUser(req.params.id);
    return res.status(status).json(retorno);
  } catch (error) {
    return res.status(500).json({ MessageError: "Erro não esperado!" });
  }
};
