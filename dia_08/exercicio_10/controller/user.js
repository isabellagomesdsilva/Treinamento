const { createUser, getUsers, getOneUser, putUser, deleteUser } = require('../model/user')

exports.getAll = async (req, res) => {
    const {data: retorno, status}  = await getUsers()
    res.status(status).json(retorno)
} 

exports.create = async (req, res) => {
    const {data: retorno, status}  = await createUser(req.body) 
    res.status(status).json(retorno)
}

exports.getOne = async (req, res) => {
    const {data: retorno, status}  = await getOneUser(req.params.id)
    res.status(status).json(retorno)
}

exports.put = async (req, res) => {
    const {data: retorno, status}  = await putUser(req.params.id, req.body)
    res.status(status).json(retorno)
}

exports.remove = async (req, res) => {
    const {data: retorno, status}  = await deleteUser(req.params.id)
    res.status(status).json(retorno)
}