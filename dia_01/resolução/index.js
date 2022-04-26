//template_string=``
//concatenacao_string=''
//const primeiroNome = 'Isabella'
//const segundoNome = 'Gomes'

//console.log('O primeiro nome é: ' + primeiroNome + ' e o segundo é: ' + segundoNome)
//console.log(`O primeiro nome é: ${primeiroNome} e o segundo é: ${segundoNome}`)

const {geracao} = require('./func')
console.log('A soma de 1 + 2 = ' + geracao('+', 1, 2));
console.log('A subtração de 20 - 1 = ' + geracao('-', 20, 1));
console.log('A multiplicação de 5 * 2 = ' + geracao('*', 5, 2));
console.log('A divisão de 40 / 2 = ' + geracao('/', 40, 2));