/*
    1 - Criar funções que possibilite o consumo de uma API
    2 - Solicitar uma criação de usuário
    3 - Solicitar uma alteração de usuário
    4 - Solicitar uma listagem de todos os usuários
    5 - Solicitar uma listagem de um usuário
    6 - Solicitar a exclusão de um usuário
    7 - Refazer a função de tal forma que seja reutilizada.
*/

// Não pode utilizar o AXIOS (NUNCAAAAAAAAAA)
// terá que utilizar o https ou http (nativo do nodeJS)
/*
    listagem de todos usuário: 
        url: https://624df93353326d0cfe55cbf7.mockapi.io/users
        method: GET

    listagem de um usuário: 
        url: https://624df93353326d0cfe55cbf7.mockapi.io/users/1
        method: GET

    alteração de usuário: 
        url: https://624df93353326d0cfe55cbf7.mockapi.io/users/1
        method: PUT
        body: {
            "name": "aqui_o_name",
            "email": "aqui_o_email"
        }

     criação de usuário: 
        url: https://624df93353326d0cfe55cbf7.mockapi.io/users
        method: POST
        body: {
            "name": "aqui_o_name",
            "email": "aqui_o_email"
        }

    deletar um usuário: 
        url: https://624df93353326d0cfe55cbf7.mockapi.io/users/1
        method: DELETE
*/

(async () => {
    const https = require('https')
    const url = 'https://624df93353326d0cfe55cbf7.mockapi.io' 

    const integrationHttp = (pesquisa, options, data = null) => (resolve, reject) => {
        var req = https.request(pesquisa, options, (res) => {
            if (res.statusCode < 200 || res.statusCode > 299) {
                return reject (new Error(`HTTP status code ${res.statusCode}`))
            }
            let body = [];
            res.on('data', d => body.push(d));
            res.on('end', () => resolve(JSON.parse(Buffer.concat(body).toString())))
            res.on('error', () => reject ())
        })
        if (data) req.write(data)
        req.end()
    }

    const Get = (pesquisa) => {
        var options = {
            method: 'GET'
        }

        return new Promise (integrationHttp(pesquisa, options))
    }

    const Post = (pesquisa, data) => {
        const dataString = JSON.stringify(data)
        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': dataString.length,
            }
        };
        return new Promise(integrationHttp(pesquisa, options, dataString))
    }

    const Patch = (pesquisa, data) => {
        const dataString = JSON.stringify(data)

        var options = {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'Content-Length': dataString.length
            }
        };

        return new Promise(integrationHttp(pesquisa, options, dataString))
    }

    const Put = (pesquisa, data) =>{
        const dataString = JSON.stringify(data)

        var options ={
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                'Content-Length': dataString.length,
            }
        };

        return new Promise(integrationHttp(pesquisa, options, dataString))
    }

    const Delete = (pesquisa) =>{
        var options ={
            method: 'DELETE',
        };

        return new Promise(integrationHttp(pesquisa, options))
    }

    try{
        const [user] = await Get(`${url}/users`)

        const userGetOne = await Get (`${url}/users/${user.id}`)

        const createUser = await Post(`${url}/users`, {"name": "Giovani", "email": "giovani@email"})

        const updateUser = await Put(`${url}/users/${userGetOne.id}`, {"name": "Giovani", "email": "giovani@email"})

        const patchUser = await Patch(`${url}/users/${userGetOne.id}`, { "name": "Giovani", "email": "giovani@email" }) 

        const deleteOne = await Delete(`${url}/users/${createUser.id}`)
    }
    catch (error) {
        console.log('Error no codigo....', error)
    }
})()




