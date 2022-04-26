const { execute } = require('./execute.js');
const resultadoSoma = execute('soma', 1, 2);
const resultadoSub = execute('subtracao', 1, 2);
const resultadoMult = execute('multiplicacao', 1, 2)
const resultadoDiv = execute('divisao', 1, 2);
console.log('Resultado: \n', 
'Soma:', resultadoSoma, '\n', 
'Subtração:', resultadoSub, '\n', 
'Multiplicação:', resultadoMult, '\n', 
'Divisão:', resultadoDiv)