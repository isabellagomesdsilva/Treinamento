const express = require('express')

const { integrationHttp }= require('./help')

const url = 'https://624df93353326d0cfe55cbf7.mockapi.io'

const app = express()

app.use(express.json())

app.get('/user', async (req, res) => {
    const {data: retorno, status} = await integrationHttp(`${url}/users`, 'GET')
    res.status(status).json(retorno)
})

app.post('/user', async(req, res) => {
    const {data: retorno, status} = await integrationHttp(`${url}/users`, 'POST', req.body)
    res.status(status).json(retorno)
})

app.get('/user/:id', async(req, res) => {
    const {data: retorno, status} = await integrationHttp(`${url}/users/${req.params.id}`, 'GET')
    res.status(status).json(retorno)
})

app.put('/user/:id', async(req, res) => {
    const {data: retorno, status} = await integrationHttp(`${url}/users/${req.params.id}`, 'PUT', req.body)
    res.status(status).json(retorno)
})

app.delete('/user/:id', async(req, res) => {
    const {data: retorno, status} = await integrationHttp(`${url}/users/${req.params.id}`, 'DELETE')
    res.status(status).json(retorno)
})

app.listen(3000, () => console.log('Servidor de pé: http://localhost:3000'))
