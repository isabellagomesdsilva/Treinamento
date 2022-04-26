(async () => {
  const https = require("https");
  const url = "https://624df93353326d0cfe55cbf7.mockapi.io";

  const integrationHttp =
    (pesquisa, options, data = null) =>
    (resolve, reject) => {
      var req = https.request(pesquisa, options, (res) => {
        if (res.statusCode < 200 || res.statusCode > 299) {
          return reject(new Error(`HTTP status code ${res.statusCode}`));
        }
        let body = [];
        res.on("data", (d) => body.push(d));
        res.on("end", () =>
          resolve(JSON.parse(Buffer.concat(body).toString()))
        );
        res.on("error", () => reject());
      });
      if (data) req.write(data);
      req.end();
    };

  const Get = (pesquisa) => {
    var options = {
      method: "GET",
    };

    return new Promise(integrationHttp(pesquisa, options));
  };

  const Post = (pesquisa, data) => {
    const dataString = JSON.stringify(data);
    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": dataString.length,
      },
    };
    return new Promise(integrationHttp(pesquisa, options, dataString));
  };

  const Put = (pesquisa, data) => {
    const dataString = JSON.stringify(data);

    var options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": dataString.length,
      },
    };

    return new Promise(integrationHttp(pesquisa, options, dataString));
  };

  const Delete = (pesquisa) => {
    var options = {
      method: "DELETE",
    };

    return new Promise(integrationHttp(pesquisa, options));
  };


  const Transferir = async (valor, user, lojista) => {
    let usuario = await Get(`${url}/users/${user}`);
    let autorizacao = await Get(
      `https://run.mocky.io/v3/8fafdd68-a090-496f-8c9a-3442cf30dae6`
    );
    let loja = await Get(`${url}/users/${lojista}`);
    if (usuario.logista === false) {
      if (usuario.value >= valor) {
        if ((autorizacao.message == "Autorizado")) {
            await Post(`${url}/transaction/`, {
            'value': valor,
            'usuario': usuario.id,
            'logista': loja.id,
          });
          await Put(`${url}/users/${user}`, {
            'value': usuario.value - valor,
          });
          await Put(`${url}/users/${lojista}`, {
            'value': loja.value + valor,
          });
          await Post(`${url}/notify/`, {'user': lojista });
        } else {
          console.log("TRANSAÇÃO NÃO AUTORIZADA");
        }
      } else {
        console.log("SALDO INSUFICIENTE");
      }
    } else {
      console.log("ESSA TRANSAÇÃO NÃO É POSSÍVEL, REMETENTE DEVE SER USUÁRIO");
    }
  };

  const Cadastrar = async (name, cpf_cnpj, email, senha, valor, lojista) => {
    let consultaCPF_CNPJ = await Get(`${url}/users/?cpf_cnpj=${cpf_cnpj}`);
    let consultaEmail = await Get(`${url}/users/?email=${email}`);
    if (!(consultaCPF_CNPJ.length > 0 || consultaEmail.length > 0)) {
      Post(`${url}/users`, {
        value: valor,
        name: name,
        cpf_cnpj: cpf_cnpj,
        email: email,
        senha: senha,
        logista: lojista,
      });
    } else {
      console.log("USUÁRIO JÁ CADASTRADO");
    }
  };
  try {
    const cadastro = await Cadastrar(
      "LojaIsabella",
      26802294000169,
      "lojaisabella@redfox.tech",
      1234,
      1000,
      true
    );
    
    const transferencia = await Transferir(1, 58, 54);
  } catch (error) {
    console.log("Erro no codigo....", error);
  }
})();
