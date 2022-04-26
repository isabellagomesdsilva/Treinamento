/*
        req.query => Query params
        req.params => params
        req.body -> body
        
        res => status
        body => json, string, xml
        header => json

EXEMPLO IMPORTANDO JSON
const express = require('express')
const app = express ()
const {user} = require('./db')
app.get('/user', (req, res) => {
    return res.status(200).json{user}
})
app.listen(3000, () => console.log ("Servidor de pé: http://localhost:3000"))
*/
const express = require('express')

const app = express ()

app.use(express.json())

app.get('/user', (req, res) => {
    
    return res.status(200).json({})
})

app.post ('/user', (req, res) => {
    return res.status(200).json({body: 'ok'})
 })

app.get('/user/:id', (req, res) => {
    res.status(200).json({param: 'ok'})
})

app.put('/user/:id', (req, res) =>{
    return res.status(200).json({put: 'ok'})
})

app.delete('/user/:id', (req, res) => {
    return res.status(200).json({delete: 'ok'})
})

app.listen(3000, () => console.log ("Servidor de pé: http://localhost:3000"))

/*  request: tudo o que chega
    host: localhost
    port: 3000
    url: http://localhost:3000
    path:
    query_parameter:
     */