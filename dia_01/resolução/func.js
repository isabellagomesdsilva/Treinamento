//new Function ('a', 'b' - são os parâmetros)

const operacao = ["+", "-", "*", "/"];

//binário
// 0 -> desligado
// 1 -> ligado

//booleano
// 0 -> false
// 1 -> ligado

//tabela da verade
//True !True = false
//False !False = true

//array.lenght = tamanho do array

exports.geracao = function (tipoOperacao, valor1, valor2) {
  if (!operacao.indexOf(tipoOperacao)) {
    const calculadora = new Function("a", "b", `return a ${tipoOperacao} b`);
    return calculadora(valor1, valor2);
  }
  throw new Error("Tipo de operação inválida!"); //Mosta uma mensagem de erro ou throw 'mensagem de erro'
};
