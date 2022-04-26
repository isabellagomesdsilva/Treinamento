/*Exercicio Bonus
    1 - Realizar pagamento
        https://624df93353326d0cfe55cbf7.mockapi.io/pagamento
        METHOD: POST
        body: {
                "valor": 43,
                "id_user": 87
            },
    Obs:
        Você só poderá realizar um pagamento para um usuário
        exemplo:
            Higor recebeu 100 reais. Caso eu tentei fazer um novo pagamento
                para o Higor o sistema não pode deixar pois o Higor já recebeu.
    
    Caso de teste:
        1 - Pagamento duplicados
        2 - Criação dos usuários
        3 - Criação dos pagamentos

    2 - Realizar transferencia
        Você pode realizar inumeras transferencias caso tenha saldo.
        Quando o usuário transferir o seu dinheiro para outro você deve retirar o dinheiro
            da conta do usuário que transferiu.
        obs: Caso o usuário não tenha dinheiro suficiente para trasnferir, informa-lo
            que não poderá realizar essa ação.
        
        Exemplo:
            Higor gostaria de transferir 100 reais para a Dana, o sistema deve possibilitar
            essa transferencia caso o higor tenha saldo.
            O sistema deve retirar o dinheiro do saldo do cliente após a realização da transferencia.
        
        https://624df93353326d0cfe55cbf7.mockapi.io/transferencia
            METHOD: POST
            body: {
                    "id_user_r": 81, -> o que vai receber o dinheiro
                    "id_user_t": 24, -> o que vai transferir o dinheiro
                    "valor": 77,
            },

        Caso de teste
            1 - Trasnferencia sem dinheiro
            2 - Transferencia com dinheiro
            3 - Transferencia com o usuário não existente.
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

    const Pagar = async (valor, usuario) => {
        let comp = await Get(`${url}/pagamento/?id_user=${usuario}`)
        if(!(comp.length>0)){
            Post (`${url}/pagamento/`, {'id_user': usuario, 'valor': valor})
        } else{
            console.log("ERRO")
        }
    }

    const Transferir = async (rementente, destinatario, valorTransf) => {
        let consultaRem = await Get(`${url}/pagamento/?id_user=${rementente}`)
        let consultaDest = await Get(`${url}/pagamento/?id_user=${destinatario}`)
        if (consultaRem.length>0 && consultaDest.length>0){
            if (consultaRem[0].valor >= valorTransf){
                Post(`${url}/transferencia/`, {'id_user_r': rementente, 'id_user_t': destinatario, 'valor': valorTransf})
            } else {
                console.log('TRANSFERÊNCIA NÃO REALIZADA')
            }
        } else {
            console.log("USUÁRIO NÃO ENCONTRADO")
        }
    }
    try{

        const pagamento = Pagar(999, 1) 
        const transferencia = Transferir(4, 1, 10000)
    }
    catch (error) {
        console.log('Erro no codigo....', error)
    }
})()