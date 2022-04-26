// é constante (variável)
//const a = 'isabella'

//é função (arrow function)
//(x, y) = (a, b) => a + b
//const b = (a, b) => a + b

//é função
//function b (valor1 , valor2){
//return valor1 + valor2}
// pode ser sobreposta/modificada

//const b = (a, b) => a + b // não permite sobreposição/modificada
//console.log(b(1,2))
//b = 'Encontro 03'

//é variável
//var a = 'isabella'
//a = 'Encontro 02'

//variável global
//const app = "app-redfox";

//const soma = (x, y) => {
  //const name = "Isabella"; - variável dentro do escopo, só funciona dentro das chaves, não pode ser usado fora
  //console.log('app', app)
  //return x + y};

//console.log('name', name) - pq a variável name está dentro das chaves

//Promise
//  3 states
//      1 - Pending -> "não está aguardando o then ou o catc"
//      2 - Resolver -> then
//      3 - Reject -> catch

// => async / await (mesma coisa que promise)
//new Promise ((resolve, reject) =>{})


//const aguarde = (time): Promise =>{
    //return new Promise ((resolve, reject) => {
        //setTimeout(() => {resolve(), time})})}
    //aguarde(3000)
        //.then (() =>console.log('estou aguardando o set timeout...'))
        //.catch((err) => console.log('error', err))

//then - await
//try catch => reject

    

