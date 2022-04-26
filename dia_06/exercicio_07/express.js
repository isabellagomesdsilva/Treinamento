const express = require('express')

const app = express()

app.use(express.json())

const routes = require ('./routes/user')

routes(app)

app.listen(3000, () => console.log('Servidor de pé: http://localhost:3000'))