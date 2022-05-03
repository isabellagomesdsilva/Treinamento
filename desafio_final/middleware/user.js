const {body, param, validationResult} = require('express-validator');
const {getPostsAll, getNewsAll, getOnePost, getNewsOne} = require('../model/user');

const {ObjectId} = require('mongodb');
const res = require('express/lib/response');

exports.paramsId = [
    param('id').notEmpty().custom((value) => ObjectId.isValid(value))
]

exports.validateCreate = [
    body('title').trim().notEmpty().isString(),
    body('body').trim().notEmpty().isString()
]

exports.validateError = (req, res, next) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({MessageError: error.array()})
    }
    return next()
}

exports.validateGetAllPost = async(req, res, next) =>{
    const {data} = await getPostsAll()
    if (!(data.data.length > 0)) return res.status(404).json({MessageError: "Não tem usuários cadastrados!"})
    return next()
}

exports.validateGetAllNews = async(req, res, next) =>{
    const {data} = await getNewsAll()
    if (!(data.data.length > 0)) return res.status(404).json({MessageError: "Não tem usuários cadastrados!"})
    return next()
}

exports.validateFoundByIdPosts = async (req, res, next) => {
    const {id} = req.params
    const {data} = await getOnePost(id)
    if (!data) return res.status(404).json({MessageError: "Usuário não cadastrado"})
    return next()
}

exports.validateFoundByIdNews = async (req, res, next) => {
    const {id} = req.params
    const {data} = await getNewsOne(id)
    if (!data) return res.status(404).json({MessageError: "Usuário não cadastrado"})
    return next()
}