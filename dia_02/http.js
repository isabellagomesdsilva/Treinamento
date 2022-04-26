// Criar um código que vai pegar os ceps que a gente digitar

//13065030 -> é para trazer o meu cep
//63050111 -> é para informar que esse cep não consta na consulta

//  1 - Colocar a função como Promise 
//  2 - Retornar o valor consultado na API
//  3 - Refazer a função de tal forma que seja reutilizada

const url = 'https://viacep.com.br/ws'
const https = require('https')

const getHttp = (search) => (resolve, reject) => https.get(search, res =>{
    let data = []
    res.on('data', d => data.push(d))
    res.on('end', ()=> resolve(JSON.parse(Buffer.concat(data).toString())))
    res.on('error', ()=>reject())
    })

const request = (search) => new Promise(getHttp(search))

const search = `${url}/13065030/json`

request(search) 
    .then(resultado => console.log(resultado))
    .catch(() => console.log('Esse cep não consta na consulta'))



//const chamadaDeCep = (cep) =>{
    //const req = https.get(cep, res =>{
        //console.log(`status resposta ${res.statusCode}`)
        
        //data -> retorno
        //closer -> fechado
        //error -> error
        //res.on('data', d => {
            //process.stdout.write(d)})})
        //req.on('error', (err) => {
            //console.log('deu ruim...', err)})}

