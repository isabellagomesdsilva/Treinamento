// npm init ou yarn init cria o package.json (tudo o que tem no seu projeto)

(async () => {
    const { integrationHttp } = require('./help')
    const url = 'https://624df93353326d0cfe55cbf7.mockapi.io'
    await integrationHttp (
       'post', `${url}/users`,
        {name: 'Isabella',
        cpf_cnpj: "000000000-00",
        email: 'iii@gmail,com',
        senha: '123',
        logista: true})
        
    const {data} = await integrationHttp ('GET', `${url}/users`, null)

    console.log('data', data)

})()