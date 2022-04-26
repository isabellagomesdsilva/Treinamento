const { salarios, compras, cep } = require('./db.json')


// compose
const filtroArray = (fn, array, valor) => array.filter(fn(valor))


// curry
const filtroSalario = (valor) => (value) => value.valor < valor


// curry
const filtroCep = (valor) => (value) => value.cep === valor

console.log('resultado do filtro salario: ', filtroArray(filtroSalario, salarios, 300))
console.log('resultado do filtro produtos: ', filtroArray(filtroSalario, compras, 300))

console.log('resultado do filtro cep: ', filtroArray(filtroCep, cep, '63050222'))

// console.log('resultado_2', db.filter(filtroSalario(400)))



// value.salario < 300
// value.salario > 500
// value.salario < 2000
// () -> exec
// ()()


