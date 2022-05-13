const {
  createPokemon,
  getAllPokemon,
  getOnePokemon,
  putPokemon,
  deletePokemon,
} = require("../model/pokemon");

exports.getAllPoke = async (req, res) => {
  try {
    let { page = 0, limit = 10  } = req.query;
    const { data: retorno, status } = await getAllPokemon(
      Number(page),
      Number(limit)
    );
    return res.status(status).json(retorno);
  } catch (error) {
    return res.status(500).json({ MessageError: "Erro não esperado!" });
  }
};

exports.getOnePoke = async (req, res) => {
  try {
    const { data: retorno, status } = await getOnePokemon(req.query.name);
    return res.status(status).json(retorno);
  } catch (error) {
    return res.status(500).json({ MessageError: "Erro não esperado!" });
  }
};

exports.createPoke = async (req, res) => {
  try {
    const { data: retorno, status } = await createPokemon(req.body);
    return res.status(status).json(retorno);
  } catch (error) {
    return res.status(500).json({ MessageError: "Erro não esperado!" });
  }
};

exports.putPoke = async (req, res) => {
  try {
    const { data: retorno, status } = await putPokemon(req.params.id, req.body);
    res.status(status).json(retorno);
  } catch (error) {
    return res.status(500).json({ MessageError: "Erro não esperado!" });
  }
};

exports.removePoke = async (req, res) => {
  try {
    const { data: retorno, status } = await deletePokemon(req.params.id);
    return res.status(status).json(retorno);
  } catch (error) {
    return res.status(500).json({ MessageError: "Erro não esperado!" });
  }
};
