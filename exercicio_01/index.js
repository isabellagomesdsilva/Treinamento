const {soma, subtracao, divisao, multiplicacao} = require('./func');

const resultadoSoma = soma(15, 4);
console.log('Resultado da Soma =', resultadoSoma);

const resultadoSub = subtracao(20, 10);
console.log('Resultado da Subtração =', resultadoSub);

const resultadoDiv = divisao(40, 2);
console.log('Resultado da Divisão =', resultadoDiv);

const resultadoMult = multiplicacao(1, 3);
console.log('Resultado da Multiplicação =', resultadoMult);