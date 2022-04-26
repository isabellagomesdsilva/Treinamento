const url = 'https://viacep.com.br/ws'
const https = require('https')


const getHttp = (pesquisa) => (resolve, reject) => https.get(pesquisa, res =>{
    let data = []
    res.on('data', d => data.push(d))
    res.on('end', () => resolve(JSON.parse(Buffer.concat(data).toString())))
    res.on('error', () => reject())
})

const request = (pesquisa) => new Promise(getHttp(pesquisa))
const pesquisa = `https://pokeapi.co/api/v2/type/3`

request(pesquisa)
    .then(resultado => console.log(resultado))
    .catch(() => console.log('Esse CEP não consta na base'))