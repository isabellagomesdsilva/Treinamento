const express = require('express')

const app = express()

app.use(express.json())

app.get('/user', (req, res) => 
    // que voces vão la no endpoint de fora https://624df93353326d0cfe55cbf7.mockapi.io/users
    // e mostre o resultado
    res.status(200).json(retorno))

app.post('/user', (req, res) => 
    // que voces vão la no endpoint de fora https://624df93353326d0cfe55cbf7.mockapi.io/users
    // e mostre o resultado
    res.status(200).json(retorno))

app.get('/user/:id', (req, res) => 
    // que voces vão la no endpoint de fora https://624df93353326d0cfe55cbf7.mockapi.io/users/:id
    // e mostre o resultado
    res.status(200).json(retorno))

app.put('/user/:id', (req, res) => 
    // que voces vão la no endpoint de fora https://624df93353326d0cfe55cbf7.mockapi.io/users/:id
    // e mostre o resultado
    res.status(200).json(retorno))

app.delete('/user/:id', (req, res) => 
    // que voces vão la no endpoint de fora https://624df93353326d0cfe55cbf7.mockapi.io/users/:id
    // e mostre o resultado
    res.status(200).json(retorno))

app.listen(3000, () => console.log('Servidor de pé: http://localhost:3000'))


