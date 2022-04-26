const { getSearchs } = require('../model/user')

exports.getAll = async (req, res) => {
    const {data: retorno, status}  = await getSearchs(req.query.q)
    res.status(status).json(retorno)
} 

